import { ReactNode } from 'react'
import style from './styles/layout.style'

export default function Layout ({ children }: {children: ReactNode}) {
  return (
    <>
      <div className='first'>
        {children}
      </div>
      <style jsx>{style}</style>
    </>
  )
}
