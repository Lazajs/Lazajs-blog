import css from 'styled-jsx/css'
import { colors } from 'constants/default'

export default css`
  .container {
    margin-top: 4rem;
    min-height: 100vh;
    margin-bottom: 100px;
  }

  .container article {
    margin: 100px 0;
  }
  
  .me {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    height: fit-content;
    border-radius: 7px;
  }

  header {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin: 20px auto;
  }
  
  .info {
    color: ${colors.text};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
  }

  .info h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 3rem;
    color: ${colors.text};
  }

  .info small {
    color: ${colors.subText};
    font-size: 1.8rem;
  }

  .description p {
    color: ${colors.text};
    font-size: 2rem;
    margin-top: 40px;
    line-break: loose;
    font-weight: 500;
  }

  .network {
    display: block;
  }

  .network a {
    text-decoration: none;
    color: ${colors.text};
    
    &:nth-child(2) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .experience, .projects {
    margin-top: 40px;
    color: ${colors.text};
    height: fit-content;
    z-index: 20;
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 80px;
      height: calc(100% - 50px);
      width: 3px;
      border-radius: 7px;
      background-color: ${colors.react};
    }
  }

  .experience .single {
    margin: 20px;
    margin-top: 40px;
    margin-left: 40px;
    font-size: 18px;
  }

  .experience h3 {
    font-size: 2.4rem;
    white-space: nowrap;
  }

  .projects h3 {
    white-space: normal !important;
  }

  .single .data {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 15px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: underline white 1px;
  }

  .data .repo {
    color: ${colors.subText};
    text-decoration: none;
    margin: 20px 0;
  }

 .stack {
    display: flex;
    gap: 10px;
    color: ${colors.subText};
    margin: 20px 0;
    flex-wrap: wrap;
  }

  .data small {
    font-size: 14px;
    color: ${colors.subText};
  }

  .projects {
    margin-top: 100px;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.text};
    font-size: 2rem;
  }

  @media (min-width:768px) {
    .info {
      gap: 10px;
    }
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
