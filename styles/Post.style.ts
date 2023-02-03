import css from 'styled-jsx/css'
import { colors, fonts } from 'constants/default'

export default css`
        article {
          background-color: ${colors.secondary};
          border: .5px solid ${colors.border};
          padding: 1rem;
          position:relative;
          height: 7rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          cursor: pointer;
        }

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
        
        p {
          color: ${colors.text};
          width: 100%;
          position: relative;
          text-decoration: none;
          font-family: ${fonts.secondary}
        }

        p::first-letter {
          text-transform: capitalize;
        }

        p {
          display: inline-block;  
        }

`
