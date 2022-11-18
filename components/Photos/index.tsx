import Image from 'next/image'
import meThird from 'public/me-firstperson2.jpg'

export default function Photos () {
  return (
    <>
      <div className='images'>
        <Image src={meThird} style={{ borderRadius: '50%' }} width={200} height={200} layout='fixed' alt='Photo of me' quality={100} placeholder='blur'/>
      </div>

      <style jsx>{`
        .images {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

      `}</style>
    </>
  )
}
