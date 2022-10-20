import Link from 'next/link'
import { PostData } from 'types'

type Props = {
  data: PostData
}

export default function Post ({ data }: Props) {
  const { slug } = data

  return (
    <>
      <Link href={slug}><a>POST</a></Link>
    </>
  )
}
