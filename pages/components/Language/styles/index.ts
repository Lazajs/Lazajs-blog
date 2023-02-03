import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
  menu {
    width: fit-content;
    margin-left: 3rem;
    font-family: ${fonts.primary};
  }

  div {
    display: flex;
    width: fit-content;
    justify-content: space-around;
  }

  a{
    text-decoration: none;
  }

  .anchor {
    text-decoration: none;
    color: ${colors.text};
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem;
    text-decoration: none;
  }

  .anchor.active {
    background-color: ${colors.secondary};
  }
`
