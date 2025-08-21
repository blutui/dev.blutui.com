import { Metadata, ResolvingMetadata } from 'next'

import { loadDocumentationContent } from 'utils/markdoc'

export async function generateMetadata(
  { params }: LayoutProps<'/docs/[[...slug]]'>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  try {
    const { frontmatter } = await loadDocumentationContent(page)
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    }
  } catch {
    const parentMetadata = await parent
    return {
      title: parentMetadata.title,
      description: parentMetadata.description,
    }
  }
}

export default function DocumentationLayout({ children }: LayoutProps<'/docs/[[...slug]]'>) {
  return <>{children}</>
}
