import Head from 'next/head'
import { useRouter } from 'next/router'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { DocumentationLayout } from '@/layouts/documentation'
import { FullPageLayout } from '@/layouts/full-page'
import { GuidesLayout } from '@/layouts/guides'

import { Header } from '@/components/header'
import { SearchProvider } from '@/components/search'
import { ArticleContext, ArticleContextT } from '@/context/article-context'

import { collectHeadings } from '@/utils/collect-headings'

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

const manrope = Manrope({
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

  const { pathname, asPath } = useRouter()

  const hasToc = markdoc?.frontmatter.toc ?? true
  const toc = hasToc && markdoc?.content ? collectHeadings(markdoc.content) : []

  let markdownLayout

  if (markdoc?.frontmatter.fullWidth) {
    markdownLayout = FullPageLayout
  } else if (pathname.startsWith('/guides/')) {
    markdownLayout = GuidesLayout
  } else {
    markdownLayout = null
  }

  const Layout =
    Component.layoutProps?.Layout || markdownLayout || DocumentationLayout
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, toc }
    : { toc }

  const canonicalUrl = (
    `https://dev.blutui.com` + (asPath === '/' ? '' : asPath)
  ).split('?')[0]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <SearchProvider>
        <ArticleContext.Provider value={articleContext}>
          <Header />
          <Layout {...layoutProps}>
            <style jsx global>{`
              html {
                font-family: ${manrope.style.fontFamily};
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
