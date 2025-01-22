import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'

import { Section } from '@/utils/collect-headings'
import { useArticleContext } from '@/context/article-context'
import {
  adminAPINavigation,
  apiNavigation,
  consoleAPINavigation,
} from '@/navigation/api'

import { Footer } from '@/components/footer'
import { Item, Sidebar } from '@/components/sidebar'
import { Feedback } from '@/components/feedback'
import { ArrowLongLeftMicro } from '@/components/icons/arrow-long-left'
import { TableOfContents } from '@/components/table-of-contents'

export interface ApiLayoutProps {
  toc?: Section[]
  children: React.ReactNode
}

export function ApiLayout({ toc, children }: ApiLayoutProps) {
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

  if (articleContext.api && typeof articleContext.api === 'string') {
    const api = articleContext.api.split(' ', 2)

    method = api[0]
    endpoint = api[1]
  }

  let items: Item[]
  let apiType: string | null

  if (
    pathname === '/api-reference/console' ||
    pathname.startsWith('/api-reference/console/')
  ) {
    items = consoleAPINavigation
    apiType = 'Console API'
  } else if (
    pathname === '/api-reference/admin' ||
    pathname.startsWith('/api-reference/admin/')
  ) {
    items = adminAPINavigation
    apiType = 'Admin API'
  } else {
    items = apiNavigation
    apiType = null
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
        <Sidebar items={items} quickLinks={!apiType ? true : false}>
          {!apiType ? undefined : (
            <div className="z-20 ml-3 mr-4 flex flex-col items-start space-y-1 border-b border-black/5 bg-zinc-50 pb-3 pt-8 dark:border-white/5 dark:bg-zinc-900">
              <Link
                href="/api"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-han-400 dark:text-han-200"
              >
                <span className="opacity-60">
                  <ArrowLongLeftMicro />
                </span>
                <span>APIs</span>
              </Link>
              <h3 className="text-base font-bold tracking-tight text-zinc-600 dark:text-zinc-300">
                {apiType}
              </h3>
            </div>
          )}
        </Sidebar>
        <div className="w-full min-w-0 max-w-full flex-auto">
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
            <h1
              className={cn(
                'text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200',
                method && endpoint ? 'my-2' : 'mb-2'
              )}
            >
              {title}
            </h1>
            {description && (
              <p className="max-w-screen-md text-lg text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
            )}
          </header>
          <div id="content-wrapper" className="pb-8 pt-4">
            {children}
          </div>
          <Feedback />
          <Footer fullwidth={false} />
        </div>
        {typeof articleContext.api !== 'string' && (
          <TableOfContents toc={toc ?? []} />
        )}
      </main>
    </>
  )
}
