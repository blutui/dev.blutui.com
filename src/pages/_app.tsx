import { AppProps } from 'next/app'
import Head from 'next/head'
import { MarkdocNextJsPageProps } from '@markdoc/next.js'

import { Contribution } from '../components/Contribution'
import { Header } from '../components/Header'
import { SearchProvider } from '../components/Search'
import { ArticleContext, ArticleContextT } from '../context/ArticleContext'

import '../styles/main.css'

const Blutui = ({
  Component,
  pageProps,
}: AppProps<{ markdoc: MarkdocNextJsPageProps['markdoc'] }>) => {
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

      <SearchProvider>
        <ArticleContext.Provider value={articleContext}>
          <Header />
          <main className="flex-1 my-8 px-8 mx-auto w-full max-w-8xl flex items-start space-x-6">
            <div className="border border-white/10 rounded-lg w-72 py-6"></div>
            <div className="flex-auto">
              <Component {...pageProps} />
              <Contribution />
            </div>
          </main>
        </ArticleContext.Provider>
      </SearchProvider>
    </>
  )
}

export default Blutui
