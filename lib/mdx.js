import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {serialize} from 'next-mdx-remote/serialize'

const language = 'en'

const root = process.cwd()
const dataRoot = path.join(root, 'data')

const getFiles = () => fs.readdirSync(path.join(dataRoot, language))

const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(path.join(dataRoot,language, `${slug}.mdx`), 'utf-8')

  const {data, content} = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    frontMatter : {
      slug,
     ...data
    }
  }

}

const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.reduce((allPosts, postSlug)=> {
    const mdxSource = fs.readFileSync(path.join(dataRoot, language, postSlug))
    const {data} = matter(mdxSource)

    return [{slug: postSlug.replace('.mdx', ''), ...data}]
  }, [])
}

export {getFiles}
export {getFileBySlug}
export {getAllFilesMetadata}
