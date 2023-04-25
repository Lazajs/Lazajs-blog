import { PostData } from 'types'
import Select from 'components/Select'
import { fonts } from 'constants/default'
import Preferences from 'components/Preferences'
import Post from 'components/Post'
import useSort from 'hooks/useSort'
import Language from 'components/Language'
import { Grid, Spacer } from '@nextui-org/react'

type Props = {posts : PostData[]}

export default function Articles ({ posts }: Props) {
  const [postList, sortValues, sortBy] = useSort(posts)
  return (
    <section>
      <Preferences>
        <Language />
        <Select valuesByLang={sortValues} sortBy={sortBy} />
      </Preferences>

      <Spacer y={2} />
      <Grid.Container justify='center' gap={2}>
        {postList.map((post: PostData) => (
          <Grid xl key={post.slug}>
            <Post data={post} />
          </Grid>
        )
        )}
      </Grid.Container>

      <style jsx>{`
        section {
          font-family: ${fonts.secondary};
          margin-top: 5rem;
          margin-bottom: 5rem;
        }
      
        .wrapper {
          position: relative;
        }
      `}</style>
    </section>
  )
}
