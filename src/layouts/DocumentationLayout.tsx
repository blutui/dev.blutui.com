import React from 'react'

import { useArticleContext } from '../context/ArticleContext'
import type { Section } from '../utils/collectHeadings'

import { Contribution } from '../components/Contribution'
import { TableOfContents } from '../components/TableOfContents'
import { Sidebar } from '../components/Sidebar'

import { documentationNavigation } from '../navigation/documentation'

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

  const items = documentationNavigation

  return (
    <>
      <main className="flex w-full flex-1 items-start space-x-8 px-8">
        <aside className="sticky top-[3.75rem] flex w-72 flex-shrink-0 flex-col self-start border-r border-black/10 dark:border-white/10">
          <div className="blutui-scrollbar h-sidebar flex-shrink-0 flex-grow overflow-y-auto p-4 pl-0">
            <Sidebar items={items} />
          </div>
        </aside>
        <div className="flex flex-auto items-start space-x-8 py-8">
          <div className="flex-auto space-y-8">
            <header className="mx-auto max-w-screen-md">
              {title && (
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                  {title}
                </h1>
              )}
              {description && (
                <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
                  {description}
                </p>
              )}
            </header>
            <div className="content-wrapper">{children}</div>
          </div>
          <div className="sticky top-[6.25rem] w-64 flex-shrink-0 space-y-6">
            <TableOfContents toc={toc} />
            <Contribution />
          </div>
        </div>
      </main>
    </>
  )
}
