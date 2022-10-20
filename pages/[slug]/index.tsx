import { getFileBySlug, getFiles } from 'lib/mdx'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { PostData } from 'types'

interface PostMetadata {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>,
  frontMatter: string
}

type StaticProps = {
  params: PostData
}

export default function Post ({ source, frontMatter }: PostMetadata) {
  return (
    <MDXRemote {...source} />
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
