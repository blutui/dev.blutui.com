import React from 'react'

import { useActionKey } from '../hooks/useActionKey'

import { SearchButton } from './Search'

export interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  const actionKey = useActionKey()

  return (
    <header className="sticky top-0 flex-none border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-8xl">
        <div className="px-8 flex items-center justify-between h-[3.75rem] space-x-6">
          <span className="block flex-shrink-0 h-8 w-40 rounded-full bg-gray-500"></span>
          <div className="flex flex-auto items-center space-x-6">
            <span className="h-6 border-l border-black/10 dark:border-white/10"></span>
            <SearchButton className="text-left text-gray-600 dark:text-gray-400 font-semibold tracking-tight px-4 py-1.5 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition">
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
                  <span className="ml-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                    {actionKey[0]}K
                  </span>
                )}
              </div>
            </SearchButton>
          </div>
          <div className="flex flex-shrink-0 items-center space-x-6">
            <span className="h-6 border-l border-black/10 dark:border-white/10"></span>
            <span className="block w-6 h-6 rounded-full bg-gray-500"></span>
          </div>
        </div>
      </div>
    </header>
  )
}
