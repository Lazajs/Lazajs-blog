import { PostData } from 'types'
import Select from 'components/Select'
import { fonts } from 'constants/default'
import Preferences from 'components/Preferences'
import Post from 'components/Post'
import useSort from 'hooks/useSort'
import Language from 'components/Language'

type Props = {posts : PostData[]}

export default function Articles ({ posts }: Props) {
  const [postList, sortValues, sortBy] = useSort(posts)
  return (
    <section>
      <Preferences>
        <Language />
        <Select valuesByLang={sortValues} sortBy={sortBy} />
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
