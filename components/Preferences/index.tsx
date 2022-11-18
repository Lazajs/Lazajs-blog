import { ReactNode } from 'react'
import { colors, fonts } from 'constants/default'

interface Props {
  children: ReactNode
}

export default function Preferences ({ children }: Props) {
  return (
      <div>
        <h2>Artículos</h2>
        <span>
          {children}
        </span>

        <style jsx>{`
          div {
            position: relative;
          }

          span {
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
          }

          h2 {
            font-family: ${fonts.primary};
            color: ${colors.text};
            text-decoration: underline 1px;
            font-weight: 600;
          }
        `}</style>
      </div>
  )
}
