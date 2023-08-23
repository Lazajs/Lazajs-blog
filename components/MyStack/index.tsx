import {SiNextdotjs, SiReact, SiGraphql, SiNodedotjs, SiPython} from 'react-icons/si'
import {colors} from 'constants/default'

export default function MyStack () {
  return (
    <section>
      <p>Mi zona de comfort</p>
      <div className='slider'>
        <div className='content'>
          <span className='item'>
            <SiNextdotjs className='icon' color={'#000'} size={80} />
            <p className="text">NextJS</p>
          </span>
          <span className='item'>
            <SiReact color={colors.react} size={80}/>
            <p className="text">React</p>
          </span>
          <span className="item">
            <SiGraphql color='#e535ab' size={80} />
            <p className="text">GraphQL</p>
          </span>
          <span className="item">
            <SiNodedotjs color='#68A063' size={80} />    
            <p className="text">NodeJS</p>
          </span>
          <span className="item">
            <SiPython color='#ffd343' size={80}/>
            <p className="text">Python</p>
          </span>
        </div>
      </div>
      <style jsx>{`
        section {
          margin-top: 5rem;
        }

        .slider {
          width: 100%;
          height: 130px;
          scroll-snap-type: x mandatory;
          overflow-x: auto;
          display: flex;
          align-items: center;
          gap: 35px;
          padding-top: 30px;
          overflow-y:hidden;
        }
        
        .content {
          margin: auto;
          display: flex;
          gap: 20px;
        }

        p {
          color: ${colors.subText};
          text-align: center;
          font-size: 2rem; 
          font-weight: 700;
        }

        .item {
          position: relative;
          transition: transform 100ms;
        }

        .item .text {
          display: none;
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: 14px;
          z-index: 20;
        }

        .item:hover .text {
          display: inline-block;
        }

        .item:hover {
          transform: scale(1.1);
        }
        
      `}</style>
    </section>
  )
}