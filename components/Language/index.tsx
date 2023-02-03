import { UTC_LANGUAGES } from 'constants/default'
import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/Language.style'
import { useRouter } from 'next/router'

export default function Language () {
  const { locale } = useRouter()
  const [active, setActive] = useState(locale)

  return (
    <menu>
      <div className="languages">
        {
          Object.values(UTC_LANGUAGES).map(value => <Link style={{ textDecoration: 'none' }} href={'/'} as={`/${value}/`} locale={value} key={value}><p style={{ cursor: 'pointer' }} onClick={() => setActive(value)} className={active === value ? 'active anchor' : 'anchor'}>{value}</p></Link>)
        }
      </div>
      <style jsx>{styles}</style>
    </menu>
  )
}
