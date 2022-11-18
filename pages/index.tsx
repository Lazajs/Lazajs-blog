import type { NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { PostData } from 'types'
import Articles from 'components/Articles'
import Header from 'components/Header'
import Nav from 'components/Nav'

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
  const posts = getAllFilesMetadata()
  return {
    props: { posts }
  }
}

export default Home
