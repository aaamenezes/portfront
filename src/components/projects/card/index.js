import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from '../../common/container'
import Title from '../../title'

const CardStyled = styled.article`
  text-align: center;
  background-color: ${ ({ theme }) => theme.color.support.white };
  box-shadow: ${ ({ theme }) => theme.boxShadow.low };
  transition: ${ ({ theme }) => theme.transition.medium };

  &:hover {
    box-shadow: ${ ({ theme }) => theme.boxShadow.high };
  }

  a {
    display: flex;
    flex-direction: column;
  }
`

CardStyled.TextWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;

  p {
    margin: 0;
  }
`

function Card({ cover, title, url }) {
  return (
    <CardStyled>
      <Link href={url}>
        <a href={url}>
          <img src={cover} alt={title} />
          <CardStyled.TextWrapper>
            <Title margin='0'>
              {title}
            </Title>
          </CardStyled.TextWrapper>
        </a>
      </Link>
    </CardStyled>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Card
