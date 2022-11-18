import Javascript from 'icons/Javascript'
import Other from 'icons/Other'
import Git from 'icons/Git'
import Typescript from 'icons/Typescript'
import Next from 'icons/Next'
import { Categories } from 'types'

type Props = {
  type: Categories
}

export default function Category ({ type }: Props) {
  switch (type) {
    case 'javascript':
      return <Javascript />
    case 'typescript':
      return <Typescript />
    case 'git':
      return <Git />
    case 'nextjs':
      return <Next />
    default:
      return <Other />
  }
}
