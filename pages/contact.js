import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Container from '../src/components/common/container'
import Modal from '../src/components/common/modal'
import Title from '../src/components/title'
import Form from '../src/components/form'
import Avatar from '../src/components/common/avatar'
import Text from '../src/components/text'
import theme from '../src/theme'
import GridImages from '../src/components/contact/gridImages'
import LinkButton from '../src/components/common/linkButton'
import GithubRepositories from '../src/components/contact/repositories'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'
import { contactQuery } from '../src/infra/queries/contactQuery'

export async function getStaticProps({ preview }) {
  const data = await getContent(contactQuery, preview)

  const { githubApiUrl } = data.contact

  const githubRepositories = await fetch(githubApiUrl)
    .then(serverResponse => serverResponse.json())
    .then(convertedResponse => convertedResponse)

  return {
    props: {
      githubRepositories,
      data
    }
  }
}

export default function Contact(props) {
  const { data, githubRepositories } = props
  const { contact, social } = data
  const { socialMediaLinks } = social
  const {
    pageTitle,
    pageSubtitle,
    profilePicture,
    firstText,
    blackFirstImage,
    blackFirstText,
    blackSecondImage,
    blackSecondText,
    imagesGrid,
    ctaTitle,
    ctaText,
    ctaButtonText
  } = contact

  const [ modalDisplay, setModalDisplay ] = useState(false)

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Contato'
      }}
      header
      footer
      socialMediaLinks={socialMediaLinks}
    >
      <Container as='section'>

        <Title>
          {pageTitle}
        </Title>

        <Avatar
          imageUrl={profilePicture.url}
          imageAlt={profilePicture.alt}
          margin='0 auto'
        />

        <Title titleTag='h1'>
          {pageSubtitle}
        </Title>
      </Container>

      <Container as='section'>
        <Text external>
          {firstText}
        </Text>
      </Container>

      <Container
        as='section'
        padding='0'
        backgroundColor={theme.color.support.black}
        color={theme.color.support.white}
        maxWidth='initial'
      >
        <Container
          padding='10%'
        >

          <Container marginBottom='30px'>
            <img src={blackFirstImage.url} alt={blackFirstImage.alt} />
          </Container>

          <Text external>
            {blackFirstText}
          </Text>

          <Container marginBottom='30px'>
            <img src={blackSecondImage.url} alt={blackSecondImage.alt} />
          </Container>

          <Text external>
            {blackSecondText}
          </Text>
        </Container>
      </Container>

      <Container as='section'>
        <GridImages images={imagesGrid} />
      </Container>

      <GithubRepositories githubRepositories={githubRepositories} />

      <Container as='section'>
        <Title>{ctaTitle}</Title>
        <Text external>{ctaText}</Text>

        <LinkButton
          variant='primary'
          type='button'
          display='block'
          margin='auto auto 30px'
          handleClick={setModalDisplay}
        >
          {ctaButtonText}
        </LinkButton>

      </Container>

      {modalDisplay && (
        <Modal
          setModalDisplay={setModalDisplay}
          modalDisplay={modalDisplay}
        >
          <Title>
            Fico feliz que queira me contatar!
          </Title>
          <Form setModalDisplay={setModalDisplay} />
        </Modal>
      )}
    </PageWrapper>
  )
}

Contact.propTypes = {
  githubRepositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf(PropTypes.objectOf).isRequired
}
