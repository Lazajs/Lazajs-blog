import Back from 'icons/Back'
import type { PostData } from 'types'
import style from './styles'
// import useI18n from 'hooks/useI18n'
// import i18n from 'pages'

type Props = {data: PostData}

export default function PostNav ({ data } : Props) {
  // const lang = useI18n()
  const { title, description } = data
  // const shownDate =  new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date)), [date, locale])
  return (
  <>
    <nav className='nav'>
      <Back width={50} height={50}/>
      <b>¿Algun error? <a href="">Edítalo en Github</a></b>
    </nav>
        <h1>{title}</h1>
        <h4>{description}</h4>

      <style jsx>{style}</style>
  </>
  )
}
