import React from 'react'
import Container from '../../common/container'
import Card from '../card'
import { projectsList } from './projectsList'

function CardWrapper() {
  const projectsElements = projectsList.map((project, index) => (
    <Card
      cover={project.cover}
      title={project.title}
      text={project.text}
      url={project.url}
      highLight={index % 3 === 0}
      key={project.title}
    />
  ))

  return (
    <Container
      tag='section'
      display='grid'
      gridTemplateColumns={{
        xs: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr 1fr'
      }}
      gridGap='30px'
      padding='30px'
    >
      {projectsElements}
    </Container>
  )
}

export default CardWrapper
