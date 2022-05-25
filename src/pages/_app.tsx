import { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'

function Blutui({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Blutui Developer Documentation</title>
        <meta name="description" content="Blutui Developer Documentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Blutui
