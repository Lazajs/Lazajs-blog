import css from 'styled-jsx/css'
import { colors } from 'constants/default'

export default css`
  aside {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content:center;
    align-items: center;
    backdrop-filter: blur(5px);
    z-index:10;
  }
  
  .wrapper {
    min-width: 35rem;
    width: 30vw;
  }
  
  .content {
    min-width: 35rem;
    width: 30vw;
    background-color: ${colors.primary};
    width: 100%;
    height: 10rem;
    text-align: center;
  }
`
