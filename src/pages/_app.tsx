import { AppProps } from 'next/app'
import Head from 'next/head'

import { Contribution } from '../components/Contribution'
import { ArticleContext, ArticleContextT } from '../context/ArticleContext'

import '../styles/globals.css'

function Blutui({ Component, pageProps }: AppProps) {
  const { markdoc } = pageProps

  let title = 'Blutui'
  let articleContext: ArticleContextT = {}
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title + ' | Blutui'
    }

    if (markdoc.file && markdoc.file.path) {
      articleContext = Object.assign(articleContext, {
        filePath: markdoc.file.path,
      })
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
        <ArticleContext.Provider value={articleContext}>
          <Component {...pageProps} />
          <Contribution />
        </ArticleContext.Provider>
      </main>
    </>
  )
}

export default Blutui
