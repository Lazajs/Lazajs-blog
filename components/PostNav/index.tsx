import Back from 'Icons/Back'
import type { PostData } from 'types'
import style from 'styles/PostNav.style'
import useI18n from 'hooks/useI18n'
import { useRouter } from 'next/router'

type Props = {data: PostData}

export default function PostNav ({ data } : Props) {
  const text = useI18n('postnav')
  const { locale } = useRouter()
  const { title, description, date } = data
  const shownDate = new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date))

  return (
  <>
    <nav className='nav'>
      <Back width={50} height={50}/>
      <b>{text.github}<a href="https://github.com/Lazajs/Lazajs-blog/tree/main/data/" target={'_blank'} rel="noreferrer">{text.edit}</a></b>
    </nav>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <small>{shownDate}</small>
      <style jsx>{style}</style>
  </>
  )
}
