import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MetaTags from 'components/MetaTags'
import SharedLayout from 'components/SharedLayout'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <MetaTags>
      <SharedLayout>
        <Component {...pageProps} />
      </SharedLayout>
    </MetaTags>
  )
}

export default MyApp
