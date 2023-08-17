import style from 'styles/Lazaro.style'
import Head from 'next/head'
import Link from 'next/link'

export default function Lazaro () {
  return (
    <>
      <Head>
        <title> Portfolio - lazajs </title>
      </Head>
      <main>
        <h2>Nothing here yet! :(</h2>
        <p>
          <Link className='link' href={'/'}>Go Back</Link>
        </p>
      </main>
      <style jsx>{style}</style>
    </>
  )
}
