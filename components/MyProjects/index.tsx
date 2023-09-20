import H from 'components/Higlight'
import AnimatedElements from 'components/AnimatedElements'
import { AiFillGithub, AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import {HiOutlineExternalLink} from 'react-icons/hi'
import { PROJECTS } from 'constants/information'
import { colors } from 'constants/default'
import { useState, useMemo } from 'react'
import { Popup } from 'components/Popup'

export function MyProjects () {
  const projectImages = PROJECTS.map(project => project.images)
  const projectUrls = PROJECTS.map(project => project.url)
  const [indexShown, setIndexShown] = useState<null | number>(null)
  const [imageShown, setImageShown] = useState(0)

  const imageList = useMemo(() => {
    if (indexShown === null) return null
    return projectImages[indexShown].map((image, i) =>  (
      <>
        <img key={image} src={image}className='images-item' />

        <style jsx>{`
          .images-item {
            display: block;
            max-width: 90vw;
            max-height: 90vh;
            aspect-ratio: auto;
            object-fit: contain;
            object-position: center;
            border-radius: 7px;
          }
        `}</style>
      </>
      )
    )
  }, [indexShown])

  console.log(imageList)

  const handleNextImage = () => {
    setImageShown(imageShown + 1)
  }

  const handlePrevImage = () => {
    setImageShown(imageShown - 1)
  }

  const handleClose = () => {
    setImageShown(0)
    setIndexShown(null)
  }

  return (
    <>
      {
        indexShown !== null ? (
          <Popup>
            <div className='images'>
              <span className='icon-close'>
                <AiOutlineClose onClick={handleClose} color={colors.react} size={50} />
              </span>
              {
                imageList && imageShown !== imageList.length - 1 ? <span className='icon-prev'><AiOutlineArrowRight onClick={handleNextImage} color={colors.react} size={50} /></span> : null
              }
              {
                imageList ? imageList[imageShown] : null
              }
              {
                imageList && imageShown !== 0 ? <span className='icon-next'><AiOutlineArrowLeft onClick={handlePrevImage} color={colors.react} size={50} /></span> : null
              }
            </div>
            <a className='cta-link' href={projectUrls[indexShown]} target='_blank'><button className='cta'>Ver proyecto</button></a>
          </Popup>
        ) : null
      }
        <AnimatedElements>
          {
            PROJECTS.map((project, i) => {
              return (
                <article key={project.name} className='single'>
                  <span className='data'>
                      <h3 onClick={()=> setIndexShown(i)}>
                        <H>{project.name}</H>
                        <HiOutlineExternalLink color='#fff' size={20} style={{marginLeft: '10px'}} />
                      </h3>
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
        <style jsx>{`
          .single {
            margin: 20px;
            margin-top: 40px;
            margin-left: 40px;
            font-size: 18px;
          }

          .single .data {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 15px;
            margin-bottom: 10px;
          }

          a {
            text-decoration: underline white 1px;
          }

          .data .repo {
            color: ${colors.subText};
            text-decoration: none;
            margin: 20px 0;
          }

          .stack {
            display: flex;
            gap: 10px;
            color: ${colors.subText};
            margin: 20px 0;
            flex-wrap: wrap;
          }

          h3 {
            text-decoration: underline;
            cursor: pointer;
          }

          .data small {
            font-size: 14px;
            color: ${colors.subText};
          }

          .images .icon-close {
            position: absolute;
            right: 2rem;
            top: 2rem;
            z-index: 20;
            cursor: pointer;
          }

          .cta {
            width: 220px;
            height: 45px;
            border: none;
            border-radius: 7px;
            outline:none;
            background-color: ${colors.react};
            color: ${colors.primary};
            font-size: 2rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform .1s;
            transition filter .1s;

            &:hover {
              filter: contrast(1.1);
              transform: scale(1.05);
            }
          }
          
          a.cta-link { 
            position: fixed;
            bottom: 4rem;
            left: 50%;
            transform: translateX(-50%);
          }

          .icon-next {
            position: absolute;
            left: 3rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            cursor: pointer;
          }
          
          .icon-prev {
            position: absolute;
            right: 3rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            cursor: pointer;
          }
        `}</style>
    </>
  )
}