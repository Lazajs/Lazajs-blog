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
        
  h1 {
    margin-top: 2rem;
  }

  h4 {
    font-weight: 500;
    margin-bottom: 2rem;
  }

  b a {
    text-decoration: underline;
    font-weight: 500;
    font-size: 1.3rem; 
  }

  b,a {
    color: ${colors.subText};
  }

  small {
    text-align: center;
    color: #ffffffcc;
  }
`
