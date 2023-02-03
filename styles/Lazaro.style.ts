import css from 'styled-jsx/css'
import { colors } from 'constants/default'

export default css`
  section {
    z-index: 2;
  }

  h2 {
    color: ${colors.text};
    text-align: center;
    margin: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 2.2rem;
    // mix-blend-mode: difference;
  }
       
`
