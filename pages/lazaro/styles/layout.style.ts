import css from 'styled-jsx/css'
import { colors } from 'constants/default'

export default css`
 .first {
    position: relative;
    z-index: 1;
    padding: 1.3rem;
  }

  // .first::before {
  //   content: '';
  //   position: fixed;
  //   bottom: 10rem;
  //   left: 0rem;
  //   width: 0;
  //   height: 0;
  //   border-top: 25rem solid transparent;
  //   border-right: 50rem solid ${colors.pseudos};
  //   border-bottom: 25rem solid transparent;
  //   z-index: -1;
  //   transform: rotate(180deg)
  // }

  // .first::after {
  //   content: '';
  //   position: fixed;
  //   left: 10rem;
  //   bottom: 40rem;
  //   width: 7rem;
  //   height: 7rem;
  //   border-radius: 50%;
  //   overflow: hidden;
  //   // background-color: red;
  //   background-color: ${colors.primary};
  //   z-index: -1;
  // }

`
