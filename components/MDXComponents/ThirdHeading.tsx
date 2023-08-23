import type { Children } from 'types'

export default function SecondHeading ({ children }: Children) {
  return (
    <>
      <h3>
        {children}
      </h3>

      <style jsx>{`
        h3 {
          font-size: 2rem;
          margin-top: 4rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}
