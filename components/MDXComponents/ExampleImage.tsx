import Image from 'next/image'

type Scales = 1 | 2 | 3

export default function ExampleImage ({ src, alt, height, width, description, scaleBy }: {src: string, alt: string, width: number, height: number, description?: string, scaleBy: Scales}) {
  return (
    <>
      <div className='image-container'>
        <Image layout='fill' src={src} alt={alt} />
      </div>
      {description ? <small>{description}</small> : ''}
      <style jsx>{`
        .image-container {
          display: block;
          margin: 3rem auto;
          width: ${width}px;
          height: ${height}px;
          position: relative;
        }

        @media (min-width: 768px) {
          .image-container {
            transform: scale(1.2);
            margin: 4rem auto;
          }
        }

        @media (min-width: 1024px) {
          .image-container {
            ${scaleBy > 1 ? 'transform: scale(1.3); margin: 4rem auto' : ''}
          }
        }
        
        @media (min-width: 1280px) {
          .image-container {
           ${scaleBy > 2 ? 'transform: scale(1.8); margin: 6rem auto' : ''}
          }
        }

        .image-container .image {
          width: 100%;
          height: 100%;
          position: relative !important;
          object-fit: cover;
        }    

        small {
          display: block;
          text-align: center;
          margin: auto;
          width: 50%;
          min-width: 350px;
          opacity: .9;
        }
      `}</style>
    </>
  )
}
