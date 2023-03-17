import { useState } from 'react'
import type { PostData } from 'types'
import useI18n from './useI18n'

type HookReturns = [string[], PostData[], (option: string, posts?:PostData[])=> void]

export default function useSort (posts: PostData[]): HookReturns {
  const { old: older, new: newer } = useI18n('articles')
  const sortValuesByLang = [newer, older]
  const [postList, setPostList] = useState(() => {
    return posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  })

  const sorter = (option: string, posts?: PostData[]) => {
    const currentPosts = posts || postList
    const newSorting = currentPosts.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      if (option === older) return dateB - dateA
      return dateA - dateB
    })

    setPostList(newSorting)
  }

  return [sortValuesByLang, postList, sorter]
}
