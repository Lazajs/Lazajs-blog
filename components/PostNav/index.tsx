import Back from 'icons/Back'
import type { PostData } from 'types'
import { colors, fonts } from 'constants/default'

type Props = {data: PostData}

export default function PostNav ({ data } : Props) {
  const { title, description } = data
  return (
  <>
    <nav className='nav'>
      <Back width={50} height={50}/>
      <b>¿Algún error? <a href="">Edítalo en Github</a></b>
    </nav>
        <h1>{title}</h1>
        <h4>{description}</h4>
      <style jsx>{`
        nav.nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          font-family: ${fonts.primary};
          color: ${colors.text};
        }
        
        h1, h4 {
          color: ${colors.text};
          text-align: center;
        }

        h4 {
          font-weight: 500;
          margin-bottom: 2rem;
        }

        b a {
          text-decoration: underline;
          color: ${colors.text};
          font-weight: 500;
        }
        `}</style>
  </>
  )
}
