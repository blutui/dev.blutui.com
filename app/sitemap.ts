import { MetadataRoute } from 'next'

import { baseUrl } from 'lib/metadata'
import { source } from 'lib/source'

const exclude = ['-response-parameters', '-response', '-response-list', '/installation/create-courier-token']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString()

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...source
      .getPages()
      .filter((page) => {
        return exclude.every((s) => !page.url.includes(s))
      })
      .map((page) => {
        const { lastModified } = page.data

        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : undefined,
          changeFrequency: 'weekly',
          priority: 0.5,
        } as MetadataRoute.Sitemap[number]
      }),
  ]
}
