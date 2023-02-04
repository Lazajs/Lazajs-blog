import Script from 'next/script'

export default function GoogleTags () {
  return (
    <>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-8R4E66M4G4"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8R4E66M4G4');
        `}
        </Script>
    </>
  )
}
