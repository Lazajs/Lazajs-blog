import PostNav from 'components/PostNav'
import { getFileBySlug, getFiles } from 'lib/mdx'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { PostData } from 'types'
import style from 'pages/[slug]/styles/index'
import MDXComponents from 'components/MDXComponents'

interface PostMetadata {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>,
  frontMatter: PostData
}

type StaticProps = {
  params: PostData
}

export default function Post ({ source, frontMatter }: PostMetadata) {
  return (
    <>
    <PostNav data={frontMatter} />
    <article>
      <MDXRemote {...source} components={MDXComponents} />
      <style jsx>{style}</style>
    </article>
    </>
  )
}

export async function getStaticProps ({ params }: StaticProps) {
  const { source, frontMatter } = await getFileBySlug(params.slug)
  return {
    props: { source, frontMatter }
  }
}

export async function getStaticPaths () {
  const posts = getFiles()
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx/, '')

      }
    }
  })

  return {
    paths,
    fallback: false
  }
}
