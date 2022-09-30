import React from 'react'

import { useArticleContext } from '../context/ArticleContext'
import type { Section } from '../utils/collectHeadings'

import { Contribution } from '../components/Contribution'
import { TableOfContents } from '../components/TableOfContents'

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

  return (
    <>
      <main className="mx-auto flex w-full max-w-8xl flex-1 items-start space-x-8 py-10 px-8">
        <div className="sticky top-[6.25rem] w-72 flex-shrink-0 rounded-lg border border-black/10 py-6 dark:border-white/10"></div>
        <div className="flex flex-auto items-start space-x-8">
          <div className="flex-auto space-y-8">
            <header>
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
