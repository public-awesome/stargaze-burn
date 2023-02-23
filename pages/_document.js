import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5a2b" />
        <meta name="apple-mobile-web-app-title" content="Stargaze Burn" />
        <meta name="application-name" content="Stargaze Burn" />
        <meta name="msapplication-TileColor" content="#db2777" />
        <meta name="theme-color" content="#db2777" />
        <meta name="twitter:site" content="@StargazeZone" />
        <meta name="twitter:creator" content="@StargazeZone" />
        <meta property="twitter:image" content="/og-image.jpg" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="627" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
