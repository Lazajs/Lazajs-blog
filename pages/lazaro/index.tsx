import style from 'styles/Lazaro.style'
import Head from 'next/head'
import Link from 'next/link'
// @ts-ignore
import Projects from 'components/Projects'

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
