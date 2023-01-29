import VisitModal from 'components/VisitModal'
import { useEffect, useState } from 'react'
import Turin from 'components/Turin'

export default function TurinEyes () {
  const [{ x, y }, setCoords] = useState<{x: string, y: string}>({ x: '1rem', y: '1rem' })
  const [isTalking, setIsTalking] = useState(false)
  const [visible, setVisible] = useState(true)

  const handleEyesMovement = ({ clientX, clientY }: {clientX: number, clientY: number}) => {
    const x = clientX * 100 / window.innerWidth + '%'
    const y = clientY * 100 / window.innerHeight + '%'

    setCoords({ x, y })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleEyesMovement)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleEyesMovement)
      }
    }
  }, [])

  const handleClick = () => {
    if (isTalking && visible) setVisible(false)
    setIsTalking(prev => !prev)
  }

  return (
    <>
      {
        visible && !isTalking && <Turin x={x} y={y} onClick={handleClick} />
      }
      {
         visible && isTalking && <VisitModal x={x} y={y} onClick={handleClick} />
      }
    </>
  )
}
