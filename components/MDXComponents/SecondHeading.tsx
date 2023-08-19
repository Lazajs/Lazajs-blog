import type { Children } from 'types'

export default function SecondHeading ({ children }: Children) {
  return (
    <>
      <h2>
        {children}
      </h2>

      <style jsx>{`
        h2 {
          font-size: 2.2rem;
          margin-top: 4rem;
          margin-bottom: .5rem;
        }
      `}</style>
    </>
  )
}
