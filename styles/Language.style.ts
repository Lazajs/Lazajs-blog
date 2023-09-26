import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
  menu {
    width: fit-content;
    font-family: ${fonts.primary};
  }

  div {
    display: flex;
    gap: 2px;
    width: fit-content;
    justify-content: space-around;
    margin-right: 5px;
  }

  a{
    text-decoration: none;
  }

  .anchor {
    border-radius: 7px;
    text-decoration: none;
    color: ${colors.text};
    text-decoration: none;
    font-size: 18px;
    padding: 1rem;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      background: ${colors.hover}
    }
  }

  .anchor.active {
    background-color: ${colors.secondary};

    &:hover {
      background: ${colors.secondary}
    }
  }
`
