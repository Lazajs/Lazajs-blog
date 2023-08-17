import { colors, fonts } from 'constants/default'
import useI18n from 'hooks/useI18n'
import Highlight from 'components/Higlight'

export default function Header () {
  const text = useI18n('header')

  let shown = text.text[Math.floor(Math.random()*text.text.length)]

  return (
    <header>
      <span>
        <h1>laza<Highlight>js</Highlight></h1>
        <small><Highlight>L</Highlight>ázaro Sánchez</small>
      </span>
      <p>{shown}</p>

      <style jsx>{`
        header {
          display: flex;
          margin: 2rem auto;
          flex-direction: column;
          align-items: center;
          height: 25vh;
          justify-content: space-around;
        }

        span {
          text-align: center;
          font-weight: 700;
        }

        h1 {
          font-size: 7rem;
          color: ${colors.text}
        }

        small {
          font-size: 2rem;
          color: ${colors.subText}
        }

        p {
          font-size: 2rem;
          text-align: center;
          margin: 0;
          font-family: ${fonts.secondary};
          color: ${colors.text};
          animation: pulsate 2s ease-in-out infinite;
        }

        @keyframes pulsate {
        0% {
          transform: scale(0.95);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(0.95);
        }
        }
      `}</style>
    </header>
  )
}
