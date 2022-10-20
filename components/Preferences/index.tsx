import { ReactNode } from 'react'
import { languages, colors, fonts } from 'constants/default'

interface Props {
  children: ReactNode
  lang: string
}

export default function Preferences ({ children, lang }: Props) {
  return (
      <div>
        <h2>{lang === languages.ES ? 'Artículos' : 'Articles'}</h2>
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
          }
        `}</style>
      </div>
  )
}
