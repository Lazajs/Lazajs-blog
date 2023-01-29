import useI18n from 'hooks/useI18n'
import type { PostData } from 'types'
import Image from 'next/image'
import github from 'public/github.svg'
import style from './styles'

export default function Footer ({ data }: {data: PostData}) {
  const text = useI18n('footer')
  return (
    <>
      <footer className="footer">
        {data?.traduction && <span><p className='translator'>{text.translator}: {data?.traduction} -</p><a href={`mailto:agustinagodoy04@gmail.com?Subject=${text.subject}`} target='_blank' rel="noreferrer">Contact mail</a></span>}
        <a className='author' href={'/lazaro'}>{`${text.author}: Lázaro Sánchez`}</a>
        <p>MIT License</p>
        <a href="#"><Image style={{ filter: 'invert()' }} className='image' src={github} alt='source code' title='Source code' width={50} height={50}/></a>
      </footer>

      <style jsx>{style}</style>
    </>
  )
}
