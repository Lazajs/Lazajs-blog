import css from 'styled-jsx/css'
import {colors, fonts} from 'constants/default'

export default css`
  .submitted {
    width: calc(100vw - 10px);
    max-width: 500px;
    height: 600px;
    background: ${colors.secondary};
    z-index: 30;
    border-radius: 7px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${colors.text};
    padding: 20px;
    font-family: ${fonts.primary};
    box-shadow: 1px 1px 6px 0px ${colors.react};
  }
  
  .submitted  .link {
    color: ${colors.react};
    text-decoration: none;
    background: ${colors.primary};
    padding: 10px;
  }
  
  .container {
    width: calc(100vw - 10px);
    max-width: 500px;
    height: 600px;
    background: ${colors.secondary};
    z-index: 30;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${colors.text};
    padding: 20px;
    font-family: ${fonts.primary};
    box-shadow: 1px 1px 6px 0px ${colors.react};
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: calc(100% - 20px);
    gap: 20px;
  }

  form input {
    height: 40px;
  }
  
  form textarea, form input {
    padding: 10px;
    border-radius: 7px;
    outline: none;
    border: none;
    background: ${colors.pseudos};
    resize: none;
    font-family: ${fonts.primary};
    font-size: 1.8rem;
  }

  form input:focus, form textarea:focus {
    outline: ${colors.react} 1px solid;
  }

  label {
    display:block;
    margin-bottom: 3px;
  }

  .field {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
  }

  .field.content {
    position: relative;

  }

  small {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.6rem;
    color: #000;
  }

  .textoverflow {
    color: red;
  }
  
  button {
    height: 50px;
    border-radius: 7px;
    border: none;
    background-color: ${colors.react};
    color: ${colors.secondary};
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 100ms;
    -webkit-transition: -webkit-filter 200ms linear;

    &:hover {
      filter: contrast(1.8);
      -webkit-filter: contrast(1.3);
    }

    &[disabled] {
      opacity: 0.9;
      cursor: not-allowed;
      user-select: none;
    }
  }
`