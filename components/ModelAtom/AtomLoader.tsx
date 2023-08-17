import { memo, lazy, Suspense } from 'react'
import Spinner from 'components/Spinner'

const ModelAtom = lazy(
  () => import('components/ModelAtom'),
)

function AtomLoader () {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ModelAtom Loader={Spinner} />
      </Suspense>
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
