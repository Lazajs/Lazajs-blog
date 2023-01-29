import type { Children } from 'types'
import { colors } from 'constants/default'

export default function Paragraph ({ children }: Children) {
  return (
    <>
      <p>
        {children}
      </p>

      <style jsx>{`
        p {
          font-size: 1.8rem;
          line-height: 1.5;
          color: ${colors.paragraphText}; 
          margin: 2rem 0;
        }

        p::first-letter {
          margin-left: 1rem;
        }
      `}</style>
    </>
  )
}
