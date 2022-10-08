import { getFileBySlug, getFiles } from "../lib/mdx"
import {MDXRemote} from 'next-mdx-remote'


export default function Post ({source, frontMatter}: any) {
  return (
    <MDXRemote {...source} />
  )
}

export async function getStaticProps ({params}: any) {
  const {source, frontMatter} = await getFileBySlug(params.slug)
  return {
    props: {source, frontMatter}
  }
}

export async function getStaticPaths() {
  const posts = await getFiles()
  const paths = posts.map((post)=> {
    return {
      params: {
        slug: post.replace(/\.mdx/, ""),
        
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}