import Head from 'next/head'

import { DocumentationLayout } from '../layouts/DocumentationLayout'

import { Header } from '../components/Header'
import { SearchProvider } from '../components/Search'
import { ArticleContext, ArticleContextT } from '../context/ArticleContext'

import { collectHeadings } from '../utils/collectHeadings'

import '../styles/main.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

type BlutuiAppProps<P = {}> = Omit<AppProps<P>, 'Component'> & {
  Component: AppProps['Component'] & { layoutProps?: any }
}

export type BlutuiProps = MarkdocNextJsPageProps

const Blutui = ({ Component, pageProps }: BlutuiAppProps<BlutuiProps>) => {
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

  const toc = markdoc?.content ? collectHeadings(markdoc.content) : []

  const Layout = Component.layoutProps?.Layout || DocumentationLayout
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, toc }
    : { toc }

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
          <Layout {...layoutProps}>
            <Component {...pageProps} />
          </Layout>
        </ArticleContext.Provider>
      </SearchProvider>
    </>
  )
}

export default Blutui
