import style from 'styles/Lazaro.style'
import Head from 'next/head'
import Image from 'next/image'
import H from 'components/Higlight'
import MyStack from 'components/MyStack'
import AnimatedElements from 'components/AnimatedElements'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

const EXPERIENCE = [
  {
    name: 'No Country',
    from: 'Abril 2023',
    to: 'Ocasionalmente',
    role: ['Front-end', 'Team Leader'],
    description: 'A lo largo de tres proyectos desempeñé el rol de Front-end con equipos diferentes, desarrollando proyectos como "Awericana", "Managym" y "Wave". También estuve a cargo de dos equipos representando al cliente como Team Leader.'
  }
]

const PROJECTS = [
  {
    name: 'Awericana (Proyecto en equipo)',
    date: 'Abril 2023',
    url: '#',
    description: 'E-Commerce de compra y venta de ropa de segunda mano',
    repo: 'https://github.com/No-Country/c11-29-ft-node-react-Awericana',
    stack: ['NextJS', 'Tailwind', 'ExpressJS', 'Typescript']
  },
  {
    name: 'Managym (Proyecto en equipo)',
    date: 'Junio 2023',
    url: 'https://managym.vercel.app/',
    description: 'MANAGYM es una aplicación web desarrollada para apoyar en la gestión de un gimnasio. El principal enfoque de MANAGYM es apoyar en los procesos de transformación digital de los gimnasios mediante digitalización de procesos.',
    repo: 'https://github.com/No-Country/s9-14-ft-node-react',
    stack: ['NextJS', 'SASS', 'Zustand', 'Typescript']
  },
  {
    name: 'Pokefy',
    date: 'Febrero 2023',
    url: 'https://pokefy.vercel.app/',
    description: 'Pokefy es un buscador de pokemones que permite visualizar información de cada uno e indexarlos! Hecho con PokeAPI.',
    repo: 'https://github.com/Lazajs/POKEFY',
    stack: ['React', 'Redux', 'styled-components']
  },
  {
    name: 'Nopiqui',
    date: 'Febrero 2022',
    url: 'https://pokefy.vercel.app/',
    description: 'Pokefy es un buscador de pokemones que permite visualizar información de cada uno e indexarlos! Hecho con PokeAPI.',
    repo: 'https://github.com/Lazajs/Nopiqui',
    stack: ['React', 'SASS', 'DraftJS', 'Typescript', 'Express', 'MongoDB']
  }
]

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
            <Image width={200} height={200} className='me' src={'/yop.jpg'} alt='white' />
          </div>
          <span className='info'>
            <h1><H>L</H>áza<H>r</H>o S<H>ánc</H>hez</h1>
            <small>Desarrollador web, <H>{getAge('2004-04-26')}</H> años.</small>
            <span className='network'>
              <a href="https://www.linkedin.com/in/lazajs/" target='_blank'>
                <AiFillLinkedin size={40} />
              </a>
              <a href="https://github.com/Lazajs" target='_blank'>
                <AiFillGithub size={40} />
              </a>
              <a href="mailto:contact@lazajs.com" title='contact@lazajs.com'>
                <AiOutlineMail size={40} />
              </a>
            </span>
          </span> 
        </header>

        <div className="description">
          <p>
            Mi enfoque principal es la creación de experiencias de usuario <H>excepcionales</H>.
             Me entusiasma la <H>optimización de rendimiento</H> y la implementación de sólidas <H>arquitecturas</H> web.
          </p>
        </div>

        <AnimatedElements>
          <MyStack />
        </AnimatedElements>

        <section className='experience'>
          <h2>Experiencia</h2>
            <AnimatedElements>
              {
                EXPERIENCE.map(experience => {
                  return (
                    <article key={experience.name} className='single'>
                      <span className='data'>
                        <h3><H>{experience.name}</H></h3>
                        <small>{experience.from} - {experience.to}</small>
                      </span>
                      <p>{experience.description}</p>
                    </article>
                  )
                })
              }
            </AnimatedElements>
        </section>

      <section className='projects experience'>
        <h2>Proyectos</h2>
        
        <AnimatedElements>
          {
            PROJECTS.map(project => {
              return (
                <article className='single'>
                  <span className='data'>
                      <a href={project.url} target='_blank'><h3><H>{project.name}</H></h3></a>
                      <small>{project.date}</small>
                    </span>
                    <p>{project.description}</p>
                    <span className='stack'>
                      <b>Stack:</b>
                      {
                        project.stack.map(tech => {
                          return (
                            <p key={tech}>{tech}</p>
                          )
                        })
                      }
                    </span>
                    
                    <span>
                      <a href={project.repo} target='_blank' className='repo'>
                        <AiFillGithub color='#fff' size={50} />
                      </a>
                    </span>
                </article>
              )
            })
          }
        </AnimatedElements>

      </section>

      </section>

      <footer>
        <p>With ❤️ by Lazaro</p>
      </footer>
      <style jsx>{style}</style>
    </>
  )
}
