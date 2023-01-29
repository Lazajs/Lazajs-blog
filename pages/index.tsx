import type { NextPage } from 'next'
import type { PostData } from 'types'
import Head from 'next/head'
import { getAllFilesMetadata } from 'lib/mdx'
import Articles from 'pages/components/Articles'
import Header from 'pages/components/Header'
import Nav from 'components/Nav'
import Layout from 'components/Layout'
// import TurinEyes from 'components/TurinEyes'

const Home: NextPage<{posts: PostData[]}> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>
          Blog - lazajs
        </title>
      </Head>
      <Nav />
      <Header />
      {/* <TurinEyes /> */}
      <Articles posts={posts} />
    </Layout>
  )
}

export async function getStaticProps ({ locale }: {locale: string}) {
  const posts = getAllFilesMetadata({ locale })
  return {
    props: { posts }
  }
}

export default Home
