import style from 'styles/Lazaro.style'
import Head from 'next/head'
import Image from 'next/image'
import H from 'components/Higlight'
import MyStack from 'components/MyStack'
import AnimatedElements from 'components/AnimatedElements'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import {PROJECTS, EXPERIENCE} from 'constants/information'
import { getAge } from 'lib/getAge'
import { useRouter } from 'next/router'
import { Popup } from 'components/Popup'
import { OpinionForm } from 'components/OpinionForm'
import connect from 'db/connect'
import {Opinion} from 'db/models/Opinion'
import { type IOpinion } from 'types'
import { OpinionList } from 'components/OpinionList'

export default function Lazaro ({opinions}: {opinions: IOpinion[]}) {
  const {query} = useRouter()
  console.log(opinions)

  return (
    <>
      <Head>
        <title> Portfolio - lazajs </title>
        <meta name="description" content="Lazaro Sanchez - Web developer, passionate about Frontend and Python" />
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

      <OpinionList opinions={opinions} />

      <section className='projects experience'>
        <h2>Proyectos</h2>
        
        <AnimatedElements>
          {
            PROJECTS.map(project => {
              return (
                <article key={project.name} className='single'>
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

      {
        query?.opinion ? (
          <Popup>
            <OpinionForm />
          </Popup>
        )
        : null
        }
      <style jsx>{style}</style>
    </>
  )
}

export const getStaticProps = async () => {
  const connection = await connect()
  
  try {
    const allOpinions = await Opinion.find({})
    const opinions = allOpinions.map((single)=> {
      return {
        content: single.content,
        name: single.name
      }
    })

    connection && await connection.disconnect()

    return {
      props: {
        opinions
      }
    }
  } catch(e) {
    console.log(e)
  }

  connection && await connection.disconnect()
  return {
    props: {
      opinions: []
    }
  }


}