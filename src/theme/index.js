import { ContextConsumer } from "react-is"

const color = {
  primary: {
    dark: '#B2343A',
    normal: '#FF4B53',
    light: '#FF6F75'
  },
  support: {
    white: '#FFF',
    gray: '#F9F8FD',
    black: '#333'
  }
}

const fontFamily = {
  primary: '"Open Sans", sans-serif;',
  secondary: '"Roboto Slab", serif;'
}

const fontSize = {
  title: '48px',
  subTitle: '39px',
  superText: '20px',
  text: '16px',
  subText: '12px'
}

const transition = {
  slow: '1.3s',
  medium: '.7s',
  fast: '.3s'
}

const backGroundTransparent = {
  weak: '44',
  medium: '88',
  strong: 'CC'
}

const theme = {
  color,
  fontFamily,
  fontSize,
  transition,
  backGroundTransparent
}

export default theme