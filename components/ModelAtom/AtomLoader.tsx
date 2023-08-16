import { useState, memo } from 'react'
import dynamic from 'next/dynamic'

const ModelAtom = dynamic(
  () => import('components/ModelAtom')
)

function AtomLoader () {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? <span> Loading... </span> : ''}
      <ModelAtom setLoading={setIsLoading} />
      <style jsx>{`
        span {
          width: 100%;
          height: 400px;
          display: grid;
          place-content: center;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default memo(AtomLoader)
