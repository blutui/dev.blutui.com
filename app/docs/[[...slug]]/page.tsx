import { notFound } from 'next/navigation'

import { loadDocumentationContent } from 'utils/markdoc'
import { generateStaticParamsFor } from 'utils/pages'

export const generateStaticParams = generateStaticParamsFor('docs')

export default async function DocumentationPage({ params }: PageProps<'/docs/[[...slug]]'>) {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  let content: React.ReactNode
  try {
    ;({ content } = await loadDocumentationContent(page))
  } catch {
    notFound()
  }

  return <>{content}</>
}
