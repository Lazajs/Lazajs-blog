import { ReactNode } from 'react'

type Props = {children : ReactNode}

export default function Layout ({ children }: Props) {
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
