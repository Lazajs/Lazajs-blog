import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'

const root = process.cwd()
const dataRoot = path.join(root, 'data')

const getFiles = (locale) => fs.readdirSync(path.join(dataRoot, locale)) // Returns all files, raw

const getFileBySlug = async (slug, locale) => { // Returns the data itself for one file
  const mdxSource = fs.readFileSync(path.join(dataRoot, locale, `${slug}.mdx`), 'utf-8')
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] }
  })

  return {
    source,
    frontMatter: {
      slug,
      ...data
    }
  }
}

const getAllFilesMetadata = ({ locale }) => { // Returns the METADATA for all files
  const files = getFiles(locale)

  return files.map((postSlug) => {
    const mdxSource = fs.readFileSync(path.join(dataRoot, locale, postSlug))
    const { data } = matter(mdxSource)
    return { slug: postSlug.replace('.mdx', ''), ...data }
  })
}

export { getFiles }
export { getFileBySlug }
export { getAllFilesMetadata }
