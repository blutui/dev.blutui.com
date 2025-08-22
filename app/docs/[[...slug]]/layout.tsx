import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

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

export default async function DocumentationLayout({ params, children }: LayoutProps<'/docs/[[...slug]]'>) {
  const slug = (await params).slug
  const page = slug ? slug.join('/') : 'index'

  let frontmatter
  try {
    ;({ frontmatter } = await loadDocumentationContent(page))
  } catch {
    notFound()
  }

  return (
    <main className="max-w-8xl mx-auto flex w-full flex-1 items-start px-8 lg:space-x-9">
      <div className="flex w-full max-w-full min-w-0 flex-auto gap-8 py-8">
        <div className="w-full max-w-full min-w-0">
          <header id="content-header" className="flex flex-col gap-2">
            {frontmatter.title && (
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
                {frontmatter.title}
              </h1>
            )}
            {frontmatter.description && (
              <p className="text-base text-zinc-500 lg:text-lg dark:text-zinc-400">{frontmatter.description}</p>
            )}
          </header>
          <div id="content-wrapper" className="py-8">
            {children}
          </div>
        </div>
        <div></div>
      </div>
    </main>
  )
}
