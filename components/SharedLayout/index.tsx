import Nav from 'components/Nav'
import { ReactNode } from 'react'

export default function SharedLayout ({ children }: {children: ReactNode}) {
  return (
    <main>
      {children}
      <style jsx>{`
        main {
          padding: 1.3rem;
          max-width: 80rem;
          margin: auto;
          height: max-content;
          min-height: 100vh;
        }
      `}</style>
    </main>
  )
}
