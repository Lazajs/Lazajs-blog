import { ReactNode } from 'react'
import { colors } from 'constants/default'

type Props = {children : ReactNode}

export default function AppLayout ({ children }: Props) {
  return (
    <main>

      {children}

      <style jsx>{`
        main {
          padding: 1.2rem;
          background-color: ${colors.primary};
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </main>
  )
}
