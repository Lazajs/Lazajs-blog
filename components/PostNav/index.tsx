import { IoMdArrowRoundBack as Back } from 'react-icons/io'
import type { PostData } from 'types'
import style from 'styles/PostNav.style'
import useI18n from 'hooks/useI18n'
import { useRouter } from 'next/router'
import {VscGithub} from 'react-icons/vsc'

type Props = {data: PostData}

export default function PostNav ({ data } : Props) {
  const text = useI18n('postnav')
  const { locale, push } = useRouter()
  const { title, description, date } = data
  const shownDate = new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date))

  return (
  <>
    <nav className='nav'>
      <Back size={'50px'} cursor={'pointer'} onClick={() => push('/')}/>
      <b className='link'>
        <p>{text.github}</p>
        <a href="https://github.com/Lazajs/Lazajs-blog/tree/main/data/" target={'_blank'} rel="noreferrer">{
          <VscGithub size={30} />}
        </a>
      </b>
    </nav>
    <div className='title'>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <small>{shownDate}</small>
    </div>
      <style jsx>{style}</style>
  </>
  )
}
