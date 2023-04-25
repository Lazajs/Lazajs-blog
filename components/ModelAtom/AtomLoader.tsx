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
    {isLoading ? <span> <Loading loadingCss={{ $$loadingSize: '50px', $$loadingBorder: '5px' }} /></span> : ''}
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
