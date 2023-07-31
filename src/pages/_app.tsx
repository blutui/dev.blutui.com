import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FullPageLayout } from '@/layouts/FullPageLayout'

import { Header } from '@/components/Header'
import { SearchProvider } from '@/components/Search'
import { ArticleContext, ArticleContextT } from '@/context/ArticleContext'

import { collectHeadings } from '@/utils/collectHeadings'

// Required for custom 'canvas' syntax highlighting...
import 'prismjs'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-markup-templating.min'

import '@/styles/main.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

type BlutuiAppProps<P = {}> = Omit<AppProps<P>, 'Component'> & {
  Component: AppProps['Component'] & { layoutProps?: any }
}

export type BlutuiProps = MarkdocNextJsPageProps

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'optional',
})

const Blutui = ({ Component, pageProps }: BlutuiAppProps<BlutuiProps>) => {
  const { markdoc } = pageProps

  let title = 'Blutui'
  let description = 'Blutui developer documentation'
  let articleContext: ArticleContextT = {}
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title + ' | Blutui'
      articleContext = Object.assign(articleContext, {
        title: markdoc.frontmatter.title,
      })
    }

    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description
      articleContext = Object.assign(articleContext, {
        description: markdoc.frontmatter.description,
      })
    }

    if (markdoc.file && markdoc.file.path) {
      articleContext = Object.assign(articleContext, {
        filePath: markdoc.file.path,
      })
    }
  }

  const hasToc = markdoc?.frontmatter.toc ?? true
  const toc = hasToc && markdoc?.content ? collectHeadings(markdoc.content) : []
  const markdownLayout = markdoc?.frontmatter.fullWidth ? FullPageLayout : null

  const Layout =
    Component.layoutProps?.Layout || markdownLayout || DocumentationLayout
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, toc }
    : { toc }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content={description} />
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
            <style jsx global>{`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}</style>
            <Component {...pageProps} />
          </Layout>
        </ArticleContext.Provider>
      </SearchProvider>

      <Analytics />
    </>
  )
}

export default Blutui
