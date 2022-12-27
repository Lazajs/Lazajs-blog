import Link from 'next/link'
import { PostData } from 'types'
import Category from './Category'
import { useMemo, useEffect, useState } from 'react'
import style from 'components/Post/styles/index'

type Props = {
  data: PostData
}

export default function Post ({ data }: Props) {
  const { slug, date, title, category } = data
  const [lang, setLang] = useState<string>('ES-es')

  const shownDate = useMemo(() => new Intl.DateTimeFormat(lang, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date)), [date, lang]) // fixable linter error

  useEffect(() => {
    navigator && navigator.language && setLang(navigator.language)
  }, [])

  return (
    <>
      <Link href={slug}>
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
