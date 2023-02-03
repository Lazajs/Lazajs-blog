import style from 'styles/Lazaro.style'
import Nav from 'components/Nav'
import Layout from 'components/LazaroLayout'
import Presentation from 'components/Presentation'

export default function Lazaro () {
  return (
    <Layout>
      <section>
        <Nav />
        <Presentation />
        <style jsx>{style}</style>
      </section>
    </Layout>
  )
}
