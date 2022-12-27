import type { Children } from 'types'

export default function Paragraph ({ children }: Children) {
  return (
    <>
      <p>
        {children}
      </p>

      <style jsx>{`
        p {
          font-size: 1.8rem;
        }
      `}</style>
    </>
  )
}
