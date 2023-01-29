import { ReactNode } from 'react'
import { colors } from 'constants/default'

export default function Highlight ({ children }: {children: ReactNode}) {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          color: ${colors.react}
        }
      `}</style>
    </span>
  )
}
