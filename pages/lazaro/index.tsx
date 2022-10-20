import Nav from 'components/Nav'
import { colors } from 'constants/default'

export default function Lazaro () {
  return (
    <section>
      <Nav />
      <h2>WIP ;D</h2>
      <style jsx>{`
        h2 {
          margin-top: 10rem;
          font-size: 3rem;
          color: ${colors.text};
          text-align: center;
        }
      `}</style>
    </section>
  )
}
