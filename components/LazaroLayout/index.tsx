import { ReactNode } from 'react'
import style from 'styles/LazaroLayout.style'

export default function LazaroLayout ({ children }: {children: ReactNode}) {
  return (
    <>
      <div className='first'>
        {children}
      </div>
      <style jsx>{style}</style>
    </>
  )
}
