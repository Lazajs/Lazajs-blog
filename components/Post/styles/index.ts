import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
        small {
          position: absolute;
          top: .4rem;
          right: .9rem;
          color: ${colors.subText};
          font-size: 1.2rem;
        }

        small::first-letter {
          text-transform: capitalize;
        }
        
        a {
          color: ${colors.text};
          width: 100%;
          position: relative;
          background-color: ${colors.secondary};
          border: .5px solid ${colors.border};
          text-decoration: none;
          font-family: ${fonts.secondary}
        }

        p::first-letter {
          text-transform: capitalize;
        }

        article {
          height: 7rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-left: 1rem;
        }

        p {
          display: inline-block;  
        }

`
