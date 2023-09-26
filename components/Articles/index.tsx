import { PostData } from 'types'
import Select from 'components/Select'
import { fonts } from 'constants/default'
import Preferences from 'components/Preferences'
import Post from 'components/Post'
import Language from 'components/Language'
import { useMemo, useState } from 'react'
import useI18n from 'hooks/useI18n'

type Props = {posts : PostData[]}

export default function Articles ({ posts }: Props) {
  const [sortBy, setSortBy] = useState(1) // 0: newest, 1: oldest
  const text = useI18n('articles')
  const valuesByLang = Object.values(text)
  
  const sortedPosts = useMemo(()=> {
    return posts.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return sortBy ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
    })
  }, [sortBy, text])

  return (
    <section>
      <Preferences>
        <Language />
        <Select valuesByLang={valuesByLang} selected={sortBy} sortBy={setSortBy} />
      </Preferences>

      <div className='container'>
        {
          sortedPosts.map((post: PostData) => (
            <Post key={post.id} data={post} />
          ))
        }
      </div>

      <style jsx>{`
        section {
          font-family: ${fonts.secondary};
          margin-top: 8rem;
          margin-bottom: 6rem;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 40px
        }
        
      `}</style>
    </section>
  )
}
