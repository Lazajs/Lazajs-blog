import type { NextPage } from 'next'
import type { PostData } from 'types'
import { getAllFilesMetadata } from 'lib/mdx'
import Articles from 'components/Articles'
import Header from 'components/Header'
import Head from 'next/head'

const Home: NextPage<{posts: PostData[]}> = ({ posts }) => {
  return (
      <>
        <Head>
          <title> Blog - lazajs </title>
        </Head>
        <div className='animation'>
          <Header />
          <Articles posts={posts} />
        </div>
        <style jsx>{`
        `}</style>
      </>
  )
}

export async function getStaticProps ({ locale }: {locale: string}) {
  const posts = getAllFilesMetadata({ locale })
  return {
    props: { posts }
  }
}

export default Home
