import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { loadDocumentationContent } from 'utils/markdoc'

type Props = {
  params: Promise<{ slug?: string[] }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  try {
    const { frontmatter } = await loadDocumentationContent(page)
    return {
      title: frontmatter.title as string,
    }
  } catch {
    const parentMetadata = await parent
    return {
      title: parentMetadata.title,
    }
  }
}

export default async function DocumentationPage({ params }: Props) {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  let content: React.ReactNode
  try {
    ;({ content } = await loadDocumentationContent(page))
  } catch {
    notFound()
  }

  return <div>{content}</div>
}
