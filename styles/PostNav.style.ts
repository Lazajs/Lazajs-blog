import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
  nav.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    font-family: ${fonts.primary};
    color: ${colors.text};
  }
        
  h1, h4 {
    color: ${colors.text};
    text-align: center;
  }
        
  .title {
    margin: 4rem 0;
  }

  h4 {
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .link {
    display: flex;
    align-items: center;
    height: fit-content;
    justify-content: center;
    gap: 10px;
    white-space:nowrap;
    margin-right: 43px;
  }

  b,a {
    width: 30px;
    height: 30px;
    color: ${colors.subText};
  }

  small {
    text-align: center;
    color: #ffffffcc;
  }
`
