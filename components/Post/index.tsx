import Link from 'next/link'
import { useRouter } from 'next/router'
import { PostData } from 'types'
import Category from './Category'
import { useMemo } from 'react'
import { colors } from 'constants/default'
import useI18n from 'hooks/useI18n'

type Props = {
  data: PostData
}

export default function Post ({ data }: Props) {
  const { slug, date, title, category, description } = data
  const { locale } = useRouter()
  const shownDate = useMemo(() => new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date)), [date, locale])
  const text = useI18n('article')
  return (
   <article>
      <div className='container'>
        <header className='header'>
        <Category type={category} />
          <span className='title'>
            <h3>{title}</h3>
            <small>{shownDate}</small>
          </span>
        </header>

        <p>{description}</p>
        <Link href='/[slug]' as={`/${slug}`}>
          <button className='link'>{text.goto}</button>
        </Link>
      </div>

      <style jsx>{`
        article {
          width: 100%;
        }

        .header {
          display: flex;
          gap: 10px;
          color: ${colors.text};
        }

        p {
          color: ${colors.subText};
          text-align: left;
          margin: 15px 0;
          font-size: 18px;
        }

        .link {
          padding: 12px;
          width: 80px;
          font-size: 16px;
          color: ${colors.text};
          font-weight: 700;
          background-color: ${colors.secondary};
          border:none;
          outline:none;
          border-radius: 7px;
          cursor: pointer;
          transition: background 100ms;

          &:hover {
            background: ${colors.hover};
          }
        }


      `}</style>
   </article>
  )
}
