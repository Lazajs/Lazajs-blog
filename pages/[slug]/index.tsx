import Head from 'next/head'
import { PostData } from 'types'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from 'lib/mdx'
import PostNav from 'components/PostNav'
import style from 'styles/ShownArticle.style'
import MDXComponents from 'components/MDXComponents'
import 'highlight.js/styles/atom-one-dark.css'
import Footer from 'components/Footer'
import Layout from 'components/Layout'

interface PostMetadata {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>,
  frontMatter: PostData
}

type StaticProps = {
  params: PostData
  locale: string
}

export default function ShownArticle ({ source, frontMatter }: PostMetadata) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            {`${frontMatter.title} - lazajs`}
          </title>
        </Head>
        <PostNav data={frontMatter} />
        <article>
          <MDXRemote {...source} components={MDXComponents} />
        </article>
      </Layout>
      <Footer data={frontMatter}/>
      <style jsx>{style}</style>
    </>
  )
}

export async function getStaticProps ({ params, locale }: StaticProps) {
  const { source, frontMatter } = await getFileBySlug(params.slug, locale)
  return {
    props: { source, frontMatter }
  }
}

export async function getStaticPaths ({ locales }: {locales: string[]}) {
  const postsES = getFiles(locales[0])
  const postsEN = getFiles(locales[1])

  const pathsES = postsES.map((post) => ({ params: { slug: post.replace(/\.mdx/, '') }, locale: 'es-ar' }))
  const pathsEN = postsEN.map((post) => ({ params: { slug: post.replace(/\.mdx/, '') }, locale: 'en-us' }))

  const paths = pathsEN.concat(pathsES)
  return {
    paths,
    fallback: false
  }
}
