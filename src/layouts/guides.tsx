import React from 'react'

import { useArticleContext } from '@/context/article-context'

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
      <main>
        <header className="mb-6 border-b py-6">
          <div className="max-w-8xl mx-auto px-8 text-zinc-800 dark:text-white">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          </div>
        </header>
        {children}
      </main>
    </>
  )
}
