import { useEffect, useState } from 'react'

export default function Projects () {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    if (window && typeof window !== 'undefined') {
      // @ts-ignore
      import('section_mf/Section').then(res => setComponent(res.default))
    }
  }, [])

  // @ts-ignore
  return Component ? <Component /> : null
}
