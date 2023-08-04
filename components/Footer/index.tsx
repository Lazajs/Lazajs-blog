import useI18n from 'hooks/useI18n'
import type { PostData } from 'types'
import Image from 'next/image'
import github from 'public/github.svg'
import style from 'styles/Footer.style'

export default function Footer ({ data }: {data: PostData}) {
  const { translator, author, subject } = useI18n('footer')

  return (
    <>
      <footer className="footer">
        {data?.traduction && <span><p className='translator'>{translator}: {data?.traduction} -</p><a href={`mailto:agustinagodoy04@gmail.com?Subject=${subject}`} target='_blank' rel="noreferrer">Contact mail</a></span>}
        <a className='author' href={'/lazaro'}>{`${author}: Lázaro Sánchez`}</a>
        <p>MIT License</p>
        <a href="https://github.com/Lazajs/Lazajs-blog" target={'_blank'} rel="noreferrer"><Image style={{ filter: 'invert()' }} className='image' src={github} alt='source code' title='Source code' width={50} height={50}/></a>
      </footer>

      <style jsx>{style}</style>
    </>
  )
}
