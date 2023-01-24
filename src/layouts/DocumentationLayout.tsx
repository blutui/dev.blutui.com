import React from 'react'

import { useArticleContext } from '@/context/ArticleContext'
import type { Section } from '@/utils/collectHeadings'

import { TableOfContents } from '@/components/TableOfContents'
import { Sidebar } from '@/components/Sidebar'

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

  const items = documentationNavigation

  return (
    <>
      <main className="flex w-full flex-1 items-start space-x-8 px-8">
        <Sidebar items={items} />
        <div className="flex w-full min-w-0 max-w-full flex-auto space-x-8 py-8">
          <div className="w-full min-w-0 max-w-full space-y-8">
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
          <TableOfContents toc={toc} />
        </div>
      </main>
    </>
  )
}
