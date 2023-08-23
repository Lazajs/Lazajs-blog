import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
  article {
    color: ${colors.text};
    font-weight: 500;
    font-family: ${fonts.secondary};
  }
  
  article > h1 {
    color: black;
  }
`
