import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
        h2 {
          color: ${colors.text};
          text-align: center;
          margin: 2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          font-size: 3rem;
        }

        b {
          font-family: ${fonts.secondary};
          color: ${colors.subText};
          text-align:center;
          display: block;
          font-size: 1.6rem;
          font-weight: 500;
          width: 30rem;
          margin:auto;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
        }

        .information {
          font-family: ${fonts.primary};
          font-size: 1.8rem;
          line-height: 1.5;
          color: ${colors.text};
          margin-top: 2rem;
          text-align: center;
        }

        @media screen and (min-width: 820px) {
          .wrapper {
            margin-top: 3rem;
            flex-direction: row;
            align-items: center;
          }

          .information {
            text-align: left;
          }
        }
`
