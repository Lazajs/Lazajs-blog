import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MetaTags from 'components/MetaTags'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <MetaTags>
      <Component {...pageProps} />
    </MetaTags>
  )
}

export default MyApp
