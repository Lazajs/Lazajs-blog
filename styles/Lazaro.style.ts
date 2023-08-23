import css from 'styled-jsx/css'
import { colors } from 'constants/default'

export default css`
  .container {
    margin-top: 4rem;
    min-height: 100vh;
  }

  .container article {
    margin: 100px 0;
  }
  
  .me {
    border-radius: 50%;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    height: fit-content;
  }

  header {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
  
  .info {
    color: ${colors.text};
    height: 100%;
  }

  .info h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2.8rem;
    color: ${colors.text};
  }

  .info small {
    color: ${colors.subText};
    font-size: 1.8rem;
  }

  .description p {
    color: ${colors.text};
    font-size: 2rem;
    margin-top: 30px;
    line-break: loose;
    font-weight: 500;
  }

  @media (min-width:768px) {
    .info h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.8rem;
    }

    .description p {
      text-align: center;
    }
  }

`
