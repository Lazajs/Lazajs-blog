import style from 'styles/Lazaro.style'
import Nav from 'components/Nav'
import LazaroLayout from 'components/LazaroLayout'
import Presentation from 'components/Presentation'
import Head from 'next/head'

export default function Lazaro () {
  return (
      <LazaroLayout>
        <Head>
          <title> Portfolio - lazajs </title>
        </Head>
        <section>
          <Nav />
          <Presentation />
          <style jsx>{style}</style>
        </section>
      </LazaroLayout>
  )
}
