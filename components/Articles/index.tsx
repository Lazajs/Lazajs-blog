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

      <div className='container'>
        {
          postList.map((post: PostData) => (
            <Post key={post.id} data={post} />
          ))
        }
      </div>

      <style jsx>{`
        section {
          font-family: ${fonts.secondary};
          margin-top: 5rem;
          margin-bottom: 5rem;
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
