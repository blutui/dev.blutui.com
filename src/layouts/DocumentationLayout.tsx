import React from 'react'

import { useArticleContext } from '@/context/ArticleContext'
import type { Section } from '@/utils/collectHeadings'

import { TableOfContents } from '@/components/TableOfContents'
import { Item, Sidebar } from '@/components/Sidebar'

import { documentationNavigation } from '@/navigation/documentation'
import { useRouter } from 'next/router'

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

  const { route } = useRouter()

  let items: Item[]
  if (route === '/docs') {
    items = documentationNavigation
  } else {
    items = []
  }

  return (
    <>
      <main className="max-w-8xl mx-auto flex w-full flex-1 items-start px-8 lg:space-x-9">
        <Sidebar items={items} />
        <div className="flex w-full min-w-0 max-w-full flex-auto space-x-8 py-8">
          <div className="w-full min-w-0 max-w-full">
            <header id="header" className="mx-auto max-w-screen-md">
              {title && (
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 lg:text-4xl">
                  {title}
                </h1>
              )}
              {description && (
                <p className="mt-2 text-base text-gray-700 dark:text-gray-400 lg:text-lg">
                  {description}
                </p>
              )}
            </header>
            <div id="content-wrapper" className="content-wrapper py-8">
              {children}
            </div>
            <footer className="max-w-8xl mx-auto border-t border-black/5 pb-16 pt-8 dark:border-white/5">
              <p className="text-xs text-zinc-600 dark:text-zinc-500">
                Copyright &copy; {new Date().getFullYear()} Blutui.
              </p>
            </footer>
          </div>
          <TableOfContents toc={toc} />
        </div>
      </main>
    </>
  )
}
