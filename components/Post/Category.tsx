import { SiTypescript, SiNextdotjs, SiReact, SiJavascript, SiGit } from 'react-icons/si'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { Categories } from 'types'

type Props = {
  type: Categories
}

export default function Category ({ type }: Props) {
  switch (type) {
    case 'javascript':
      return <SiJavascript size={'50px'} />
    case 'typescript':
      return <SiTypescript size={'50px'} />
    case 'git':
      return <SiGit size={'50px'} />
    case 'nextjs':
      return <SiNextdotjs size={'50px'} />
    case 'react':
      return <SiReact size={'50px'} />
    default:
      return <BsFillInfoSquareFill size={'50px'} />
  }
}
