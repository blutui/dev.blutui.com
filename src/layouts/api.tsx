import { useRouter } from 'next/router'
import cn from 'clsx'

import { useArticleContext } from '@/context/article-context'
import { consoleAPINavigation } from '@/navigation/api'

import { Footer } from '@/components/footer'
import { Item, Sidebar } from '@/components/sidebar'

export interface ApiLayoutProps {
  children: React.ReactNode
}

export function ApiLayout({ children }: ApiLayoutProps) {
  const { pathname } = useRouter()
  const articleContext = useArticleContext()

  let title: string | null = null
  let description: string | null = null

  let method: string | null = null
  let endpoint: string | null = null

  if (articleContext.title) {
    title = articleContext.title
  }
  if (articleContext.description) {
    description = articleContext.description
  }

  if (articleContext.api) {
    const api = articleContext.api.split(' ', 2)

    method = api[0]
    endpoint = api[1]
  }

  let items: Item[]

  if (
    pathname === '/api-reference/console' ||
    pathname.startsWith('/api-reference/console/')
  ) {
    items = consoleAPINavigation
  } else {
    items = []
  }

  let methodClassName: string
  switch (method) {
    case 'GET':
      methodClassName = cn('text-emerald-500 dark:text-emerald-400')
      break
    case 'POST':
      methodClassName = cn('text-han-300 dark:text-han-300')
      break
    case 'PATCH':
      methodClassName = cn('text-orange-500 dark:text-orange-300')
      break
    case 'DELETE':
      methodClassName = cn('text-red-300 dark:text-red-400')
      break
    default:
      methodClassName = cn('text-zinc-500 dark:text-zinc-400')
  }

  return (
    <>
      <main className="mx-auto flex w-full max-w-8xl flex-1 px-8 lg:space-x-8">
        <Sidebar items={items} quickLinks={false} />
        <div className="w-full max-w-full">
          <header id="header" className="mb-4 pt-8">
            {method && endpoint && (
              <div className="flex items-center gap-x-3">
                <span className={cn('font-mono text-xs', methodClassName)}>
                  {method}
                </span>
                <span className="size-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <span className="font-mono text-xs text-zinc-400">
                  {endpoint}
                </span>
              </div>
            )}
            <h1 className="my-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
              {title}
            </h1>
            {description && (
              <p className="max-w-lg text-lg text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
            )}
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
