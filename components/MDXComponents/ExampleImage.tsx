import Image from 'next/image'

export default function ExampleImage ({ src, alt, height, width, description }: {src: string, alt: string, width?: number, height?: number, description?:string}) {
  return (
    <>
      <div className='image-container'>
        <Image style={{ display: 'inline-block', verticalAlign: 'bottom' }} width={width || 100} height={height || 50} src={src} alt={alt} />
      </div>
        {description ? <small>{description}</small> : ''}
      <style jsx>{`
        .image-container {
          display:block;
          margin: 3rem auto;
          width: fit-content;
          box-shadow: 0px 0px 5px 0px rgba(255,255,255,255.75);
          vertical-align: bottom;
          line-height: 0;
        }

        small {
          display: block;
          text-align: center;
          margin: auto;
          width: 50%;
          min-width: 500px;
          opacity: .9;
        }
      `}</style>
    </>
  )
}
