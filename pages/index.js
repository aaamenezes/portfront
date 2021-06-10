import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'
import Title from '../src/components/title'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'

export async function getStaticProps({ preview }) {
  const query = `
    query {
      home(locale: pt_BR) {
        coverPicture {
          url
          alt
        }
        profilePicture {
          url
          alt
        }
        portfolioName
        portfolioOwner
      }
    }
  `

  const data = await getContent(query, preview)

  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  const { data } = props
  const { home } = data

  const { coverPicture, portfolioName, portfolioOwner, profilePicture } = home

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Home'
      }}
      header
      footer
    >
      <Hero
        imageURL={coverPicture.url}
        imageAlt={coverPicture.alt}
        avatarURL={profilePicture.url}
        avatarAlt={profilePicture.alt}
      />
      <Container tag='section'>
        <Title
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
        >
          {portfolioName}
        </Title>
        <Title
          titleTag='h1'
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
        >
          {portfolioOwner}
        </Title>
      </Container>
    </PageWrapper>
  )
}

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf).isRequired
}
