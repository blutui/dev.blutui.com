import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { loadDocumentationContent } from 'utils/markdoc'
import { generateStaticParamsFor } from 'utils/pages'

type Props = {
  params: Promise<{ slug?: string[] }>
}

export const generateStaticParams = generateStaticParamsFor('docs')

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  try {
    const { frontmatter } = await loadDocumentationContent(page)
    return {
      title: frontmatter.title as string,
      description: frontmatter.description as string,
    }
  } catch {
    const parentMetadata = await parent
    return {
      title: parentMetadata.title,
      description: parentMetadata.description,
    }
  }
}

export default async function DocumentationPage({ params }: Props) {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  let content: React.ReactNode
  let frontmatter: Record<string, unknown>
  try {
    ;({ content, frontmatter } = await loadDocumentationContent(page))
  } catch {
    notFound()
  }

  return <div>{content}</div>
}
