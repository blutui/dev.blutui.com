import { AppProps } from 'next/app'
import Head from 'next/head'

import { Contribution } from '../components/Contribution'

import '../styles/globals.css'

function Blutui({ Component, pageProps }: AppProps) {
  const { markdoc } = pageProps

  let title = 'Blutui'
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title + ' | Blutui'
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content="Blutui Developer Documentation" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Component {...pageProps} />

        <Contribution />
      </main>
    </>
  )
}

export default Blutui
