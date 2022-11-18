import Link from 'next/link'
import { PostData } from 'types'
import Category from './Category'
import { colors, fonts } from 'constants/default'
import { useMemo, useEffect, useState } from 'react'

type Props = {
  data: PostData
}

export default function Post ({ data }: Props) {
  const { slug, date, title, category } = data
  const [lang, setLang] = useState<string>('ES-es')

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  const shownDate = useMemo(() => new Intl.DateTimeFormat(lang, options).format(new Date(date)), [lang]) // fixable linter error

  useEffect(() => {
    navigator && navigator.language && setLang(navigator.language)
  }, [])

  return (
    <>
      <Link href={slug}>
        <a>
          <article>
            <Category type={category} />
            <small>{shownDate}</small>
            <p>{title}</p>
          </article>
        </a>
      </Link>

      <style jsx>{`
        small {
          position: absolute;
          top: .4rem;
          right: .9rem;
          color: ${colors.subText};
          font-size: 1.2rem;
        }

        small::first-letter {
          text-transform: capitalize;
        }
        
        a {
          color: ${colors.text};
          width: 100%;
          position: relative;
          background-color: ${colors.secondary};
          border: .5px solid ${colors.border};
          text-decoration: none;
          font-family: ${fonts.secondary}
        }

        p::first-letter {
          text-transform: capitalize;
        }

        article {
          height: 7rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-left: 1rem;
        }

        p {
          display: inline-block;  
        }
      `}</style>
    </>
  )
}
