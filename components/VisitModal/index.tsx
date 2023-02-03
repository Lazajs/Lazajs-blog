import { createPortal } from 'react-dom'
import styles from 'styles/VisitModal.style'
import Turin, { TurinProps } from 'components/Turin'

export default function VisitModal ({ ...props }: TurinProps) {
  return createPortal(
    <>
      <aside>
        <div className='wrapper'>
          <Turin isModal={true} {...props} />
          <div className='content'>
            <h4 className='heading'></h4>
          </div>
        </div>
      </aside>
      <style jsx>{styles}</style>
    </>

    , document.getElementById('__next')!
  )
}
