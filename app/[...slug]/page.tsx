import { createRelativeLink } from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { getMDXComponents } from 'mdx-components'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { createMetadata } from 'lib/metadata'
import { source } from 'lib/source'
import { LLMCopyButton } from 'components/ai/page-actions'
import { DocsApi } from 'components/docs-api'

export default async function Page(props: PageProps<'/[...slug]'>) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const { body: MDX, toc, full, lastModified, api } = page.data

  let method: string | null = null
  let endpoint: string | null = null

  if (api) {
    const apiMethodEndpoint = api.split(' ', 2)

    method = apiMethodEndpoint[0]
    endpoint = apiMethodEndpoint[1]
  }

  return (
    <DocsPage
      toc={toc}
      full={full}
      tableOfContent={{ style: 'clerk' }}
      lastUpdate={lastModified ? new Date(lastModified) : undefined}
      breadcrumb={{
        includeSeparator: true,
      }}
    >
      <DocsTitle className="flex items-center justify-between gap-4">
        {page.data.title}
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
      </DocsTitle>
      {method && endpoint && <DocsApi method={method} endpoint={endpoint} />}
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateMetadata(props: PageProps<'/[...slug]'>): Promise<Metadata> {
  const { slug = [] } = await props.params
  const page = source.getPage(slug)
  if (!page) notFound()

  const image = {
    url: ['/og', ...slug, 'image.webp'].join('/'),
    width: 1200,
    height: 630,
  }

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/${page.slugs.join('/')}`,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  })
}

export async function generateStaticParams() {
  return source.generateParams()
}
