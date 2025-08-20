import { MetadataRoute } from 'next'
import { getAllPages } from 'utils/pages'
import { getServerSideURL } from 'utils/url'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = await getAllPages('docs')

  const url: string = getServerSideURL()

  return [
    {
      url,
      priority: 1,
    },
    ...docs.map((path): MetadataRoute.Sitemap[number] => ({
      url: `${url}/${path}`,
      priority: 0.8,
    })),
  ]
}
