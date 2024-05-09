import { useArticleContext } from '@/context/article-context'

import { Footer } from '@/components/footer'
import { Item, Sidebar } from '@/components/sidebar'

export interface ApiLayoutProps {
  children: React.ReactNode
}

export function ApiLayout({ children }: ApiLayoutProps) {
  const articleContext = useArticleContext()

  let title: string | null = null

  let method: string | null = null
  let endpoint: string | null = null

  if (articleContext.title) {
    title = articleContext.title
  }

  if (articleContext.api) {
    const api = articleContext.api.split(' ', 2)

    method = api[0]
    endpoint = api[1]
  }

  const items: Item[] = []

  return (
    <>
      <main className="mx-auto flex w-full max-w-8xl flex-1 px-8 lg:space-x-8">
        <Sidebar items={items} />
        <div className="w-full max-w-full">
          <header id="header" className="border-b py-8 dark:border-zinc-800">
            {method && endpoint && (
              <div className="flex items-center gap-x-3">
                <span className="font-mono text-xs text-emerald-500 dark:text-emerald-400">
                  {method}
                </span>
                <span className="size-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <span className="font-mono text-xs text-zinc-400">
                  {endpoint}
                </span>
              </div>
            )}
            <h1 className="my-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
              {title}
            </h1>
          </header>
          <div id="content-wrapper" className="pb-8 pt-4">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
