import style from 'styles/Lazaro.style'
import Atom from 'components/Atom'
import Head from 'next/head'

export default function Lazaro () {
  return (
    <>
      <Head>
        <title> Portfolio - lazajs </title>
      </Head>
      <section>
        <Atom />
        <style jsx>{style}</style>
      </section>
    </>
  )
}
