import { type IOpinion } from "types"
import { colors, fonts } from "constants/default"
import { FaQuoteLeft } from 'react-icons/fa'

export function OpinionList ({opinions} : {opinions: IOpinion[]}) {

  return (
    <section className="slider">
      <article className="list">

        {
          opinions.map((opinion, i) => (
            <blockquote className="quote" key={opinion.content.slice(0,10) + i}>
              <FaQuoteLeft className='icon' size={30} color={colors.react} />
              <p>{opinion.content}</p>
              <b>{opinion.name ? opinion.name : 'Anonimo'}</b>
            </blockquote>
          ))
        }
      </article>

      <style jsx>{`
        .slider {
          display: block;
          scroll-snap-type: x mandatory;
          overflow-x: auto;
          width: 100%;
          margin: 150px 0 150px 0;
          font-family: ${fonts.primary};

        }

        .list {
          color: ${colors.pseudos};
          display: flex;
          gap: 40px;
          width: fit-content;
        }

        .quote {
          background-color: ${colors.secondary};
          scroll-snap-align: start;
          border-radius: 7px;
          padding: 30px 20px 40px 20px;
          position: relative;
          width: 300px;
          font-size: 1.6rem;
          line-height: 1.6;

          transition: opacity 120ms;
          transition: transform 100ms;
        }
      
        .quote p {
          margin: .2rem;
        }

        .quote b {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          color: ${colors.react};
          font-family: ${fonts.secondary};
        }

        .quote .icon {
          position: absolute;
          left: 1rem;
          top: 1rem;
        }
      `}</style>
    </section>
  )
}