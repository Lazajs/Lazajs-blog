import { PostData } from 'types'
import Select from 'components/Select'
import { useEffect, useState } from 'react'
import { fonts, FILTERS } from 'constants/default'
import Preferences from 'components/Preferences'
import Post from 'components/Post'
import useSort from 'hooks/useSort'

type Props = {posts : PostData[]}

export default function Articles ({ posts }: Props) {
  const [filter, setFilter] = useState<string>(FILTERS.NEW)
  const [postList, sorter] = useSort(posts)

  useEffect(() => {
    sorter(filter)
  }, [filter, sorter])
  console.log(posts)
  return (
    <section>
      <Preferences>
        <Select values={[FILTERS.NEW, FILTERS.OLD]} setState={setFilter} name='Sort'/>
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
