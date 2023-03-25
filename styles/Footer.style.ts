import css from 'styled-jsx/css'

export default css`
  .footer {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 2rem;
  }
        
  .translator {
    display: inline-block;
  }

  .translator ~ a {
    color: #fff;
  }

  .author {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`
