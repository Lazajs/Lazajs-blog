import { useState } from 'react'
import type { PostData } from 'types'
import { FILTERS } from 'constants/default'

type HookReturns = [PostData[], (option: string)=> void]

export default function useSort (posts: PostData[]): HookReturns {
  const [postList, setPostList] = useState(() => {
    return posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  })

  const sorter = (option: string) => {
    const newSorting = postList.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      if (option === FILTERS.OLD) return dateB - dateA
      return dateA - dateB
    })

    setPostList(newSorting)
  }

  return [postList, sorter]
}
