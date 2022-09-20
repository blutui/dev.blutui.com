import Link from 'next/link'
import React from 'react'

import { useActionKey } from '../hooks/useActionKey'

import { Logo } from './Logo'
import { SearchButton } from './Search'

export interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  const actionKey = useActionKey()

  return (
    <header className="sticky top-0 z-10 flex-none bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="mx-auto max-w-8xl">
        <div className="px-8 flex items-center justify-between h-[3.75rem] space-x-8">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <a className="w-72">
                <span className="sr-only">Blutui Developers home page</span>
                <Logo className="w-auto h-8 mt-1" />
              </a>
            </Link>
            <span className="hidden lg:block h-6 border-l border-black/10 dark:border-white/10"></span>
          </div>
          <div className="flex flex-auto items-center space-x-6">
            <SearchButton className="hidden lg:block text-left text-gray-500 dark:text-gray-400 font-medium tracking-tight px-4 py-1.5 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition">
              <div className="flex items-center lg:w-80 space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-auto block">Quick search...</span>
                {actionKey && (
                  <kbd className="ml-2 text-xs font-sans font-semibold text-gray-600 dark:text-gray-300">
                    <abbr title={actionKey[1]} className="no-underline">
                      {actionKey[0]}
                    </abbr>{' '}
                    K
                  </kbd>
                )}
              </div>
            </SearchButton>
          </div>
          <div className="flex flex-shrink-0 items-center space-x-6">
            <ul className="hidden lg:flex items-center space-x-6">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-1 font-semibold tracking-tight text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-500 transition"
                >
                  <span>Help centre</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 opacity-50"
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
                  href="#"
                  className="flex items-center space-x-1 font-semibold tracking-tight text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-500 transition"
                >
                  <span>Console</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 opacity-50"
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
            <span className="h-6 border-l border-black/10 dark:border-white/10"></span>
            <a
              href="https://github.com/blutui/dev.blutui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-gray-400"
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
    </header>
  )
}
