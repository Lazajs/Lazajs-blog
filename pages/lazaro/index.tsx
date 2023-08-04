import style from 'styles/Lazaro.style'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import Projects from 'components/Projects'

// @ts-ignore
const Projects = dynamic(() => import('section_mf/Section'), { ssr: false, suspense: true })

export default function Lazaro () {
  return (
    <>
      <Head>
        <title> Portfolio - lazajs </title>
      </Head>
      <Projects />
      <section>
        <h2>Nothing here yet! :(</h2>
        <p>
          <Link className='link' href={'/'}>Go Back</Link>
          </p>
      </section>
      <style jsx>{style}</style>
    </>
  )
}
