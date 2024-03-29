import { ReactNode } from 'react'
import { colors, fonts } from 'constants/default'
import useI18n from 'hooks/useI18n'

interface Props {
  children: ReactNode
}

export default function Preferences ({ children }: Props) {
  const text = useI18n('preferences')

  return (
      <div>
      <h2>{text.text}</h2>
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
          }

          h2 {
            font-family: ${fonts.primary};
            color: ${colors.text};
            font-size: 3rem;
            font-weight: 600;
          }
        `}</style>
      </div>
  )
}
