import type { Children } from 'types'

export default function Strong ({ children }: Children) {
  return (
    <>
      <strong>
        {children}
      </strong>
      <style jsx>{`
        strong {
          font-size: 1.5rem;
          background-color: #aaa;
          color: #222;
          padding: 0.1rem;
          border-radius: 1px;
        }
      `}</style>
    </>
  )
}
