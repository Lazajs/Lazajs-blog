import Link from 'next/link'
import { useRouter } from 'next/router'
import { PostData } from 'types'
import Category from './Category'
import { useMemo } from 'react'
import style from 'styles/Post.style'

type Props = {
  data: PostData
}

export default function Post ({ data }: Props) {
  const { slug, date, title, category } = data
  const { locale } = useRouter()

  const shownDate = useMemo(() => new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date)), [date, locale])

  return (
    <>
      <Link href='/[slug]' as={`/${slug}`} className='link'>
          <article>
            <Category type={category} />
            <small>{shownDate}</small>
            <p>{title}</p>
          </article>
      </Link>

      <style jsx>{style}</style>
    </>
  )
}
