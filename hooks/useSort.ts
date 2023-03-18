import { useState, useMemo, useCallback } from 'react'
import type { PostData } from 'types'
import useI18n from './useI18n'

// type HookReturns = [PostData[], string[], (option: string, posts?:PostData[])=> void]

export default function useSort (posts: PostData[]): any {
  const sortValues = useI18n('articles')
  const { new: newer, old: older } = sortValues
  const [sortBy, setSortBy] = useState<keyof typeof sortValues>()

  const sorter = useCallback(() => {
    const newSorting = [...posts].sort((a, b) => {
      const dateA = new Date(a.date).getDate()
      const dateB = new Date(b.date).getDate()
      if (sortBy === newer) return dateA - dateB
      else if (sortBy === older) return dateB - dateA
      else return 0
    })

    return newSorting
  }, [newer, older, posts, sortBy])

  const postList = useMemo(sorter, [posts, sortBy, newer, older, sorter])

  return [postList, [newer, older], setSortBy]
}
