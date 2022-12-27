import Link from 'next/link'
import { colors, fonts } from 'constants/default'
import { useRouter } from 'next/router'

export default function Nav () {
  const router = useRouter()
  const isActive = (path: string) => router.pathname === path ? colors.secondary : colors.primary

  return (
    <nav>
      <ul>
        <Link href={'/'}>
          <li>Blog</li>
        </Link>
        <Link href={'/lazaro'}>
          <li>Lazaro</li>
        </Link>
      </ul>
      <style jsx>{`
        nav {
          width: 100%
        }

        ul {
          display: flex;
          justify-content: center;
          list-style: none;
          font-family: ${fonts.secondary}
        }
 
        li {
          color: ${colors.text};
        }
        
        a {
          border-radius: 5px;
          width: 16rem;
          padding: 1rem;
          text-align:center;
          text-decoration: none;
        }

        .blog {
          background-color: ${isActive('/')}
        }

        .lazaro {
          background-color: ${isActive('/lazaro')}
        }
      `}</style>
    </nav>
  )
}
