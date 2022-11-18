import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { languages } from 'constants/default'

const language = languages.ES

const root = process.cwd()
const dataRoot = path.join(root, 'data')

const getFiles = () => fs.readdirSync(path.join(dataRoot, language)) // Returns all files, raw

const getFileBySlug = async (slug) => { // Returns the data itself for one file
  const mdxSource = fs.readFileSync(path.join(dataRoot, language, `${slug}.mdx`), 'utf-8')
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    frontMatter: {
      slug,
      ...data
    }
  }
}

const getAllFilesMetadata = () => { // Returns the METADATA for all files
  const files = getFiles()

  return files.map((postSlug) => {
    const mdxSource = fs.readFileSync(path.join(dataRoot, language, postSlug))
    const { data } = matter(mdxSource)
    return { slug: postSlug.replace('.mdx', ''), ...data }
  })
}

export { getFiles }
export { getFileBySlug }
export { getAllFilesMetadata }
