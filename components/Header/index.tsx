import { colors, fonts } from 'constants/default'

export default function Header () {
  return (
    <header>
      <span>
        <h1>lazajs</h1>
        <small>Lázaro Sánchez</small>
      </span>
      <p>Nunca paro de aprender.<br/>
      ¿Qué es lo que he aprendido?<br/>
      La respuesta es este blog.</p>

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
