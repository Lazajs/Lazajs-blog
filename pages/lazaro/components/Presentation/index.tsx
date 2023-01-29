import Photos from './Photos'
import Highlight from 'components/Higlight'

export default function Presentation () {
  const BIRTH = '04-26-2004'
  const timeBirth = new Date(BIRTH)
  const timeNow = new Date()
  let age = timeNow.getFullYear() - timeBirth.getFullYear()
  const monthsElapsed = timeNow.getMonth() - timeBirth.getMonth()

  if (monthsElapsed < 0 || timeBirth.getDate() < timeNow.getDate()) age--

  return (
    <div className='wrapper'>
      <Photos />
      <span>
        <h2>Lá<Highlight>zaro</Highlight> Sán<Highlight>che</Highlight>z</h2>
        <b>Desarrollador <Highlight>front</Highlight>-end <br /> <Highlight>{age}</Highlight> años. Argentina.</b>
      </span>

      <style jsx>{`
        .wrapper {
          margin: auto;
          margin-top: 5rem;
          min-width: 35rem;
          width: 50vw;
          background: linear-gradient(130deg, rgba(32,37,44,1) 9%, rgba(250,250,250,0.7) 50%, rgba(32,37,44,1) 91%);
          box-shadow: 0 0 15px rgba(250,250,250,0.7);
          border-radius: 4px;
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          vertical-align: middle;
        }

        span {
          text-align: center;
        }

        h2 {
          font-size: 4rem;
        }

        @media (min-width: 955px) {
          .wrapper {
            flex-direction: unset;
            justify-content: space-around;
          }

          span {
            // margin-right: 10rem;
          }
        }
      `}</style>
    </div>
  )
}
