import type { NextPage } from 'next'
import {getAllFilesMetadata} from '../lib/mdx'
import Link from 'next/link'

const Home: NextPage = ({posts} : any) => {
  console.log(posts)
  return (
    <>
    <h1>askdfhjlasdjfk</h1>
      {posts.map((post: any) => { 
        return (
          <Link key={post.slug} href={post.slug}><a>POST</a></Link>
        )
      })}
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllFilesMetadata()
  return {
    props: {posts}
  }
}

export default Home
