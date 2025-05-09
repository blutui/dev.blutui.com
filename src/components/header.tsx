import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useActionKey } from '@/utils/use-action-key'

import { Logo } from '@/components/logo'
import { SearchButton } from '@/components/search'

import { AcademicCapMini } from './icons/academic-cap'
import { BookOpenMini } from './icons/book-open'
import { CodeBracketSquareMini } from './icons/code-bracket-square'
import { QueueListMini } from './icons/queue-list'

// const AskAiButton = dynamic(
//   () => import('./ask-ai-button').then((mod) => mod.AskAiButton),
//   { ssr: false }
// )

export interface HeaderProps {
  children?: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  const actionKey = useActionKey()

  return (
    <header className="sticky top-0 z-20 flex-none border-b border-black/5 bg-zinc-50/70 backdrop-blur-sm backdrop-saturate-200 transition dark:border-white/5 dark:bg-zinc-900/70">
      <div className="max-w-8xl mx-auto flex h-[3.75rem] items-center justify-between space-x-8 px-8">
        <div className="flex shrink-0 items-center">
          <div className="inline-flex lg:w-72">
            <Link href="/">
              <span className="sr-only">Blutui Developers home page</span>
              <Logo className="mt-1 h-8 w-auto" />
            </Link>
          </div>
          <span className="-ml-px hidden h-9 border-l border-black/5 lg:block dark:border-white/5"></span>
        </div>
        <div className="flex flex-auto items-center">
          <SearchButton className="mr-6 hidden h-9 w-full cursor-pointer rounded-lg bg-zinc-900/10 px-3 py-1.5 text-left text-sm/tight font-semibold text-black/50 transition hover:bg-black/20 lg:block lg:max-w-xs dark:bg-zinc-100/10 dark:text-white/50 dark:hover:bg-white/20">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="block flex-auto tracking-tight">
                Search documentation...
              </span>
              {actionKey && (
                <kbd className="highlight-white/10 -mr-1 ml-2 rounded-sm bg-black/10 px-1.5 py-0.5 font-sans text-xs font-semibold dark:bg-white/10">
                  <abbr title={actionKey[1]} className="no-underline">
                    {actionKey[0]}
                  </abbr>{' '}
                  K
                </kbd>
              )}
            </div>
          </SearchButton>
        </div>
        <div className="flex shrink-0 items-center space-x-6">
          <ul className="hidden items-center space-x-6 md:flex">
            <li>
              <a
                className="flex items-center space-x-1 font-semibold text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-500"
                href="https://help.blutui.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>Help center</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-1 font-semibold text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-500"
                href="https://console.blutui.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>Console</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="h-6 border-l border-black/10 dark:border-white/10"></span>
            <a
              href="https://github.com/blutui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6 fill-zinc-700 dark:fill-zinc-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto hidden h-12 border-black/5 px-8 text-white lg:flex lg:items-center lg:justify-between dark:border-white/5">
        <div className="flex space-x-6">
          <HeaderNavigationItem
            name="Documentation"
            href="/docs"
            icon={<BookOpenMini />}
          />
          <HeaderNavigationItem
            name="API reference"
            href="/api"
            icon={<CodeBracketSquareMini />}
          />
          <HeaderNavigationItem
            name="Guides"
            href="/guides"
            icon={<AcademicCapMini />}
          />
          <HeaderNavigationItem
            name="Changelog"
            href="/changelog"
            icon={<QueueListMini />}
          />
        </div>
      </div>
    </header>
  )
}

interface HeaderNavigationItemProps {
  name: string
  href: string
  icon?: React.ReactNode
}

function HeaderNavigationItem({ name, href, icon }: HeaderNavigationItemProps) {
  const { pathname: route } = useRouter()
  const active = href && [route, route + '/'].some((r) => r.includes(href))

  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-flex items-center py-3.5 text-sm font-medium transition',
        active
          ? 'text-han-400 dark:text-han-100'
          : 'text-zinc-500 dark:text-zinc-400'
      )}
    >
      {icon && (
        <span className={cn('mr-2', active ? 'opacity-70' : 'opacity-50')}>
          {icon}
        </span>
      )}
      <span>{name}</span>
      <span
        className={cn(
          'absolute bottom-0 w-full transition',
          active
            ? 'bg-han-200 dark:bg-han-300 h-0.5'
            : 'h-0 bg-transparent group-hover:h-0.5 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-500'
        )}
      />
    </Link>
  )
}
