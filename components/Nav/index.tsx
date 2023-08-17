import Link from 'next/link'
import { colors, fonts } from 'constants/default'
import { useRouter } from 'next/router'

export default function Nav () {
  const { pathname } = useRouter()
  const isActive = (path: string) => pathname === path ? colors.secondary : colors.primary
  const withNavPages = ['/lazaro', '/']

  if (!withNavPages.includes(pathname)) return null // if the page is not in the array, the Nav will not be rendered

  return (
    <nav>
      <ul>
        <Link href={'/'}>
         <li className='blog'>Blog</li>
        </Link>
        <Link href={'/lazaro'}>
          <li className='lazaro'>
            Lazaro
          </li>
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
          font-family: ${fonts.secondary};
          width: 300px;
          margin: auto;
          gap: 10px
        }
 
        li {
          color: ${colors.text};
          border-radius: 7px;
          width: 16rem;
          padding: 1rem;
          text-align:center;
          text-decoration: none;
          cursor:pointer;
          transition: background 100ms;
          transition: transform 100ms;
          width: 50%;
          font-size: 20px;
          font-weight: 400;

          &:hover {
            @media (min-width: 768px) {
              background: ${colors.hover};
            }
          }
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
