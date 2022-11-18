export type Categories = 'javascript' | 'typescript' | 'nextjs' | 'git' | 'other'

export interface PostData {
  slug: string,
  date: string,
  description: string,
  title: string,
  category: Categories
}

export interface SVGProps {
  width: number
  height: number
}

export type Options = string[]
