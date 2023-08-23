import { useRef, useEffect } from "react"

export default function AnimatedElements ({children}: {children: React.ReactNode}) {
  const animator = useRef<HTMLDivElement | null>(null)

  const handleObserve: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  }

  useEffect(()=> {
    let observer: IntersectionObserver | undefined
    if (animator.current) {
      if (!observer) observer = new IntersectionObserver(handleObserve)
      const childrenList = animator.current.children
      
      Array.from(childrenList).forEach((child)=> {
        observer && observer.observe(child)
      })
    }

    return ()=> observer?.disconnect()
  }, [animator.current])

  return (
    <div className="wrapper" ref={animator}>
      {children}
    </div>
  )
}