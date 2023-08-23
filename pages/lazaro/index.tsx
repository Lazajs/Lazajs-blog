import style from 'styles/Lazaro.style'
import Head from 'next/head'
import Image from 'next/image'
import H from 'components/Higlight'
import MyStack from 'components/MyStack'

export default function Lazaro () {
  const getAge = (birth: string) => { // YYYY-MM-DD
    const actualDate = new Date()
    const birthDate = new Date(birth)

    const age = actualDate.getFullYear() - birthDate.getFullYear()

    if (
      birthDate.getMonth() > actualDate.getMonth() ||
      (birthDate.getMonth() === actualDate.getMonth() &&
        birthDate.getDate() > actualDate.getDate()) 
    ) {
      return age - 1
    }

    return age
  }

  return (
    <>
      <Head>
        <title> Portfolio - lazajs </title>
      </Head>
      <section className='container'>
        <header>
          <div className="me">
            <Image width={200} height={200} className='me' src={'/white.png'} alt='white' />
          </div>
          <span className='info'>
            <h1><H>L</H>áza<H>r</H>o S<H>ánc</H>hez</h1>
            <small>Desarrollador web, <H>{getAge('2004-04-26')}</H> años.</small>
          </span> 
          <p></p>
        </header>

        <div className="description">
          <p>
            Mi enfoque principal es la creación de experiencias de usuario <H>excepcionales</H>,
             y me entusiasma la <H>optimización de rendimiento</H> y la implementación de sólidas <H>arquitecturas</H> web.
          </p>
        </div>

        <MyStack />

        <article>
          <h2>Experiencia</h2>
        </article>
      </section>
      <style jsx>{style}</style>
    </>
  )
}
