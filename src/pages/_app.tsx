import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

function Blutui({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blutui</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content="Blutui Developer Documentation" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default Blutui
