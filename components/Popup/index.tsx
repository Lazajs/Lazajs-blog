import { createPortal } from 'react-dom'
import style from 'styles/Popup.style'
import {useEffect} from 'react'

function Component ({ children }: {children: React.ReactNode}) {

  useEffect(()=> {
    document.body.style.overflow = 'hidden'
    document.body.style['userSelect'] = 'none'

    return () => { 
      document.body.style.overflow = 'auto'
      document.body.style['userSelect'] = 'auto'
    }
  }, [])

  return (
    <section className='popup'>
        {children}
        <style jsx>{style}</style>
    </section>
  )
}

export function Popup ({ children }: {children: React.ReactNode}) {
  return createPortal(
    <Component>
      {children}
    </Component>
    , document.body)
}