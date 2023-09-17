import css from 'styled-jsx/css'

export default css`
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0001;
    backdrop-filter: blur(2px); 
    display: grid;
    place-content: center;
    z-index: 20;
  }
`