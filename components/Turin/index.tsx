
import styles from 'styles/Turin.style'

export type TurinProps = {
  onClick: ()=> void
  isTalking?: boolean
  x: string
  y: string
  isModal?: boolean
}

export default function Turin (props: TurinProps) {
  const { onClick, isTalking, x, y } = props
  return (
    <>
      <section className={props?.isModal ? 'active' : ''}>
        <div onClick={onClick} className={`head ${isTalking ? 'talking' : ''}`} title='Turin'>
            <div className='eyes first'>
              <div className='eye left' style={x ? { left: x, top: y, transform: `translate(-"+${x}+", -"+${y}+")` } : { left: '1rem' }}></div>
            </div>
            <div className="eyes">
              <div className='eye right' style={x ? { left: x, top: y, transform: `translate(-"+${x}+", -"+${y}+")` } : { left: '1rem' }}></div>
            </div>
          </div>
          <div className='body'></div>
          <div className='left-hand'></div>
          <div className='right-hand'></div>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
