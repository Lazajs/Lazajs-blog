import { colors, fonts } from 'constants/default'
import useI18n from 'hooks/useI18n'
import Highlight from 'components/Higlight'

export default function Header () {
  const text = useI18n('header')

  return (
    <header>
      <span>
        <h1>laza<Highlight>js</Highlight></h1>
        <small><Highlight>L</Highlight>ázaro Sánchez</small>
      </span>
      <p>{text.text}</p>

      <style jsx>{`
        header {
          display: flex;
          margin: 2rem auto;
          flex-direction: column;
          align-items: center;
          height: 40vh;
          justify-content: space-around;
        }

        span {
          text-align: center;
          font-weight: 700;
        }

        h1 {
          font-size: 6rem;
          color: ${colors.text}
        }

        small {
          font-size: 1.8rem;
          color: ${colors.subText}
        }

        p {
          font-size: 2rem;
          text-align: center;
          font-family: ${fonts.secondary};
          color: ${colors.text}
        }
      `}</style>
    </header>
  )
}
