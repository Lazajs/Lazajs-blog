import Image from 'next/image'

export default function ExampleImage ({ src, alt, height, width }: {src: string, alt: string, width?: number, height?: number}) {
  return (
    <>
      <div className='image-container'>
        <Image style={{ verticalAlign: 'middle' }} width={width || 100} height={height || 50} src={src} alt={alt} />
      </div>
      <style jsx>{`
        .image-container {
          display:block;
          margin: 3rem auto;
          width: fit-content;
          box-shadow: 0px 0px 5px 0px rgba(255,255,255,255.75);
        }
      `}</style>
    </>
  )
}
