import { useState, memo } from 'react'
import dynamic from 'next/dynamic'
import { Loading } from '@nextui-org/react'

const ModelAtom = dynamic(
  () => import('components/ModelAtom'),
  { ssr: false }
)

function AtomLoader () {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
    {isLoading ? <span> <Loading size='xl' /> </span> : ''}
    <ModelAtom setLoading={setIsLoading} />
    <style jsx>{`
      span {
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
      }
    `}</style>
    </>
  )
}

export default memo(AtomLoader)
