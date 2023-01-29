import type { Children } from 'types'

export default function UnorderedList ({ children }: Children) {
  return (
    <>
      <ul>
        {children}
      </ul>
      <style jsx>{`
        ul {
          font-size: 1.6rem;
          margin: 1rem 1rem 1rem 2rem;
        }
      `}</style>
    </>
  )
}
