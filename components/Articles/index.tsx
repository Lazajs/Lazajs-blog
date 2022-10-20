import { PostData } from 'types'
import Select from 'components/Select'
import { useState } from 'react'
import { languages, fonts } from 'constants/default'
import Preferences from 'components/Preferences'
import Post from 'components/Post'

type Props = {posts : PostData[]}

export default function Articles ({ posts }: Props) {
  const [language, setLanguage] = useState<string | unknown>(languages.ES)
  const [, setFilter] = useState<string[] | unknown>([])

  return (
    <section>
      <Preferences lang={language as string}>
          <Select values={[languages.ES, languages.EN]} set={setLanguage} />
          <Select values={['Newest', 'Older']} set={setFilter} />
      </Preferences>

      {posts.map((post: PostData) => <Post key={post.slug} data={post} />)}

      <style jsx>{`
        section {
          font-family: ${fonts.secondary};
          margin-top: 5rem;
        }
      
        .wrapper {
          position: relative;
        }
      
        div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </section>
  )
}
