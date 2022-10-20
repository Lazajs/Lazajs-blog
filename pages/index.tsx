import type { NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { PostData } from 'types'
import Articles from 'components/Articles'
import Nav from 'components/Nav'
import Header from 'components/Header'

const Home: NextPage<{posts: PostData[]}> = ({ posts }) => {
  return (
    <>
      <Nav />
      <Header />
      <Articles posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const posts = await getAllFilesMetadata()
  return {
    props: { posts }
  }
}

export default Home
