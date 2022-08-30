import { AppProps } from 'next/app'
import Head from 'next/head'

import { Contribution } from '../components/Contribution'
import { SearchButton, SearchProvider } from '../components/Search'
import { ArticleContext, ArticleContextT } from '../context/ArticleContext'
import { useActionKey } from '../hooks/useActionKey'

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

  const actionKey = useActionKey()

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
        <SearchProvider>
          <ArticleContext.Provider value={articleContext}>
            <SearchButton className="text-zinc-700 font-semibold tracking-tight px-4 py-2 border rounded-lg bg-white hover:bg-zinc-100">
              Search
              {actionKey && (
                <span className="ml-2 text-xs font-semibold bg-slate-200 py-0.5 px-1.5 rounded text-slate-500">
                  {actionKey[0]}K
                </span>
              )}
            </SearchButton>
            <Component {...pageProps} />
            <Contribution />
          </ArticleContext.Provider>
        </SearchProvider>
      </main>
    </>
  )
}

export default Blutui
