import React from 'react'
import Link from 'next/link'

import { useArticleContext } from '@/context/article-context'

import { ArrowLongLeft } from '@/components/icons/arrow-long-left'

export interface GuidesLayoutProps {
  layoutProps: any
  children: React.ReactNode
}

export const GuidesLayout = ({ layoutProps, children }: GuidesLayoutProps) => {
  const articleContext = useArticleContext()

  let title = null

  title = articleContext?.title

  return (
    <>
      <main className="">
        <header className="mb-6 border-b px-8 py-8 dark:border-zinc-800">
          <div className="mx-auto max-w-screen-md">
            <div className="mb-4">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-500"
              >
                <ArrowLongLeft className="h-5 w-5" />
                Back to guides
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 lg:text-4xl">
              {title}
            </h1>
          </div>
        </header>
        <div className="px-8">
          <div className="max-w-8xl mx-auto w-full">{children}</div>
        </div>
      </main>
    </>
  )
}
