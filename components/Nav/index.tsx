import Link from 'next/link'
import { colors, fonts } from 'constants/default'
import { useRouter } from 'next/router'
import NotAvaible from './NotAvaible'
import { useEffect, useState } from 'react'

export default function Nav () {
  const router = useRouter()
  const isActive = (path: string) => router.pathname === path ? colors.secondary : colors.primary
  const [message, setMessage] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [message])

  return (
    <nav>
      <ul>
        <Link href={'/'}>
         <li className='blog'>Blog</li>
        </Link>
        <Link href={'/'}>
          <li className='lazaro' onClick={() => setMessage(true)} onMouseEnter={() => setMessage(true)}>
            Lazaro
            {message && <NotAvaible />}
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
          font-family: ${fonts.secondary}
        }
 
        li {
          color: ${colors.text};
          border-radius: 5px;
          width: 16rem;
          padding: 1rem;
          text-align:center;
          text-decoration: none;
          cursor:pointer;
        }

        .blog {
          background-color: ${isActive('/')}
        }

        .lazaro {
          postion: relative;
          color: #FAFAFA33;
          background-color: transparent;
        }

        .lazaro:
      `}</style>
    </nav>
  )
}
