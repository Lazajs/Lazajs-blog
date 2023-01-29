import { ReactNode } from 'react'

export type Categories = 'javascript' | 'typescript' | 'nextjs' | 'git' | 'other' | 'react'

export interface PostData {
  slug: string,
  date: string,
  description: string,
  title: string,
  category: Categories,
  id: number,
  traduction?: string
}

export interface SVGProps {
  width: number
  height: number
}

export type Options = string[]

export type Children = {children?: ReactNode}
