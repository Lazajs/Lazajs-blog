import { PostData } from 'types'
import { useEffect, useState } from 'react'
import Select from 'components/Select'
import { fonts, FILTERS } from 'constants/default'
import Preferences from 'components/Preferences'
import Post from 'components/Post'
import useSort from 'hooks/useSort'
import Language from 'components/Language'
import { useRouter } from 'next/router'

type Props = {posts : PostData[]}

type Key = keyof typeof FILTERS

export default function Articles ({ posts }: Props) {
  const { locale } = useRouter()
  const lang = locale as Key
  const [filter, setFilter] = useState<string>('')
  const [sortValuesByLang, postList, sorter] = useSort(posts)

  useEffect(() => {
    sorter(filter, posts)
  }, [posts, sorter, filter, lang])

  return (
    <section>
      <Preferences>
        <Language />
        <Select values={sortValuesByLang} setState={setFilter}/>
      </Preferences>

      <div>
        {postList.map((post: PostData) => <Post key={post.slug} data={post} />)}
      </div>

      <style jsx>{`
        section {
          font-family: ${fonts.secondary};
          margin-top: 5rem;
          margin-bottom: 5rem;
        }
      
        .wrapper {
          position: relative;
        }
      
        div {
          margin-top: 2rem;
          height: 10rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
        }
      `}</style>
    </section>
  )
}
