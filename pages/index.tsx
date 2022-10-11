import type { NextPage } from 'next'
import {getAllFilesMetadata} from '../lib/mdx'
import Link from 'next/link'
import styles from '../styles/Home.style'

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

      <style jsx>{styles}</style>
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
