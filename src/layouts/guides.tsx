import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useArticleContext } from '@/context/article-context'
import { getGuideBySlug } from '@/navigation/guides'

import { ArrowLongLeft } from '@/components/icons/arrow-long-left'

export interface GuidesLayoutProps {
  layoutProps: any
  children: React.ReactNode
}

export const GuidesLayout = ({ layoutProps, children }: GuidesLayoutProps) => {
  const { pathname } = useRouter()
  const articleContext = useArticleContext()

  const slug = pathname.split('/')[2]
  const guide = getGuideBySlug(slug)

  let title = null

  title = articleContext?.title

  return (
    <main>
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
          {guide && (
            <div className="mt-6 flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
              <span className="text-sm font-semibold">
                {guide.authors.join(', ')}
              </span>
              <span>—</span>
              <span className="text-xs uppercase">
                {new Date(guide.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          )}
        </div>
      </header>
      <div className="px-8">
        <div className="max-w-8xl mx-auto w-full">{children}</div>
      </div>
    </main>
  )
}
