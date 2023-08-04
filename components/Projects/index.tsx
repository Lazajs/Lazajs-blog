import dynamic from 'next/dynamic'

// @ts-ignore
const Component = dynamic(() => import('section_mf/Section'), { ssr: false })

export default function Projects () {
  return Component ? <Component /> : null
}
