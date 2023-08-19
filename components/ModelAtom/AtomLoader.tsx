import { memo } from 'react'
import Spinner from 'components/Spinner'
import dynamic from 'next/dynamic'

const ModelAtom = dynamic(()=> import('components/ModelAtom'), {ssr: false, loading: Spinner})

function AtomLoader () {
  return (
    <>
      <ModelAtom Loader={Spinner} />
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
