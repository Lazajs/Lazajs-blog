import Image from 'next/image'
import me from 'public/me-cut.png'

export default function Photos () {
  return (
    <>
      <div className='images'>
        <Image src={me} style={{ transform: 'scaleX(-1)', borderRadius: '5px', filter: 'grayscale(100%)', verticalAlign: 'middle' }} width={303.75} height={539.46} layout='fixed' alt='Photo of me' quality={100} placeholder='blur'/>
      </div>

      <style jsx>{`
        .images {
          width: fit-content;
          margin: 0;
        }

      `}</style>
    </>
  )
}
