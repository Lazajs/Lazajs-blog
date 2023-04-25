import type { NextPage } from 'next'
import type { PostData } from 'types'
import { getAllFilesMetadata } from 'lib/mdx'
import Articles from 'components/Articles'
import Header from 'components/Header'
import Head from 'next/head'
import AtomLoader from 'components/ModelAtom/AtomLoader'

const Home: NextPage<{posts: PostData[]}> = ({ posts }) => {
  return (
      <>
        <Head>
          <title> Blog - lazajs </title>
        </Head>
        <div className='animation'>
          <Header />
          <div className='atom-wrapper'>
            <AtomLoader/>
          </div>
          <Articles posts={posts} />
        </div>
        <style jsx>{`
          .atom-wrapper {
            min-height: 300px;
            min-width: 300px
          }
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
