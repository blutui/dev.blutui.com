import { MetadataRoute } from 'next'
import { getAllPages } from 'utils/pages'
import { getServerSideURL } from 'utils/url'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all `docs` pages
  const docs = await getAllPages('docs')

  // Define the base URL dynamically
  const url: string = getServerSideURL()

  // Construct sitemap
  return [
    {
      url,
      priority: 1,
    },
    ...docs.map((path): MetadataRoute.Sitemap[number] => ({
      url: `${url}/docs${path === '' ? '' : `/${path}`}`,
      priority: 0.8,
    })),
  ]
}
