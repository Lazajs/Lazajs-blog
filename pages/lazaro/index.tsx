import style from './styles/index'
import Nav from 'components/Nav'
import Layout from './Layout'
import Presentation from './components/Presentation'

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
