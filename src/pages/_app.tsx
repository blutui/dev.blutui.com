import Head from 'next/head'

import { Contribution } from '../components/Contribution'
import { Header } from '../components/Header'
import { SearchProvider } from '../components/Search'
import { ArticleContext, ArticleContextT } from '../context/ArticleContext'

import '../styles/main.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

export type BlutuiProps = MarkdocNextJsPageProps

const Blutui = ({ Component, pageProps }: AppProps<BlutuiProps>) => {
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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <SearchProvider>
        <ArticleContext.Provider value={articleContext}>
          <Header />
          <main className="flex-1 my-8 px-8 mx-auto w-full max-w-8xl flex items-start space-x-6">
            <div className="flex-shrink-0 border border-black/10 dark:border-white/10 rounded-lg w-72 py-6"></div>
            <div className="flex-auto flex items-start space-x-6">
              <div className="flex-auto">
                <Component {...pageProps} />
              </div>
              <div className="flex-shrink-0 w-64">
                <Contribution />
              </div>
            </div>
          </main>
        </ArticleContext.Provider>
      </SearchProvider>
    </>
  )
}

export default Blutui
