import { useRouter } from 'next/router'

import { useArticleContext } from '@/context/article-context'
import type { Section } from '@/utils/collect-headings'

import { Feedback } from '@/components/feedback'
import { Footer } from '@/components/footer'
import { Item, Sidebar } from '@/components/sidebar'
import { TableOfContents } from '@/components/table-of-contents'

import { documentationNavigation } from '@/navigation/documentation'

export interface DocumentationLayoutProps {
  layoutProps: any
  toc: Section[]
  children: React.ReactNode
}

export const DocumentationLayout = ({
  layoutProps,
  toc,
  children,
}: DocumentationLayoutProps) => {
  const articleContext = useArticleContext()
  let title = null
  let description = null

  title = articleContext?.title
  description = articleContext?.description

  const { pathname } = useRouter()

  let items: Item[]

  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    items = documentationNavigation
  } else {
    items = []
  }

  return (
    <>
      <main className="mx-auto flex w-full max-w-8xl flex-1 items-start px-8 lg:space-x-9">
        <Sidebar items={items} />
        <div className="flex w-full min-w-0 max-w-full flex-auto space-x-8 py-8">
          <div className="w-full min-w-0 max-w-full">
            <header id="header" className="mx-auto max-w-screen-md">
              {title && (
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 lg:text-4xl">
                  {title}
                </h1>
              )}
              {description && (
                <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400 lg:text-lg">
                  {description}
                </p>
              )}
            </header>
            <div id="content-wrapper" className="py-8">
              {children}
            </div>
            <Feedback />
            <Footer fullwidth={false} />
          </div>
          <TableOfContents toc={toc} />
        </div>
      </main>
    </>
  )
}
