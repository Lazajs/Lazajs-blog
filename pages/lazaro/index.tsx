import Nav from 'components/Nav'
import Photos from 'components/Photos'
import style from 'pages/lazaro/styles/index'

export default function Lazaro () {
  const BIRTH = '04-26-2004'
  const timeBirth = new Date(BIRTH)
  const timeNow = new Date()
  let age = timeNow.getFullYear() - timeBirth.getFullYear()
  const monthsElapsed = timeNow.getMonth() - timeBirth.getMonth()

  if (monthsElapsed < 0 || timeBirth.getDate() < timeNow.getDate()) age++

  return (
    <section>
      <Nav />
      <div className='wrapper'>
        <span>
          <Photos />
          <h2>Lazaro Sanchez</h2>
          <b>
           Desarrollador front-end <br /> {age} años. Argentina.
          </b>

        </span>

        <div className='information'>
          <p>
            Descubrí HTML a los 15 años y empecé a interesarme en la estructura de las páginas web. Justo cuando logré entenderlo, no me bastó. Me fui adentrando cada vez más hasta conocer las diferentes etapas del desarrollo, y me intereso actualmente en crecer profesionalmente
            haciendo lo que me apasiona y utilizando las herramientas me gustan para poder llamarme, algún día, un maestro en su uso.
          </p>
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  )
}
