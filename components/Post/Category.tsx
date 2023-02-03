import Javascript from 'Icons/Javascript'
import Other from 'Icons/Other'
import Git from 'Icons/Git'
import Typescript from 'Icons/Typescript'
import Next from 'Icons/Next'
import React from 'Icons/React'
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
    case 'react':
      return <React />
    default:
      return <Other />
  }
}
