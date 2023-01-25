import { SearchButton } from '@/components/Search'
import { FullPageLayout } from '@/layouts/FullPageLayout'

import type { NextPageWithCustomLayout } from '@/types'
import Link from 'next/link'

const Home: NextPageWithCustomLayout = () => {
  return (
    <div className="flex-grow">
      <div className="relative -mx-8 -mt-[6.25rem] overflow-hidden px-8 pt-[6.25rem] pb-10">
        {/* Inspiration from Stripe Docs */}
        <div className="absolute inset-0 -z-20">
          <div className="h-full w-full bg-gradient-to-b from-cyan-400 via-pink-300 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-dots from-zinc-50 to-zinc-50 bg-[length:14px_14px] dark:from-zinc-900 dark:to-zinc-900"></div>
        <div className="mx-auto flex max-w-screen-xl items-center">
          <div className="bg-zinc-50/90 py-10 px-8 text-left shadow-[0_0_128px_128px] shadow-zinc-50/90 dark:bg-zinc-900/90 dark:shadow-zinc-900/90">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/50">
              Developer Documentation
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
              Welcome to Blutui
            </h1>
            <p className="mt-2 mb-4 text-xl text-gray-800/80 dark:text-white/80">
              Explore our guides and documentation on using Blutui.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/docs"
                className="inline-flex h-9 select-none items-center whitespace-nowrap rounded-lg bg-indigo-500 px-4 text-sm font-semibold tracking-tight text-white transition highlight-white/10 hover:bg-indigo-400"
              >
                Get started
              </Link>
              <span className="text-sm font-semibold uppercase text-zinc-800/40 dark:text-white/40">
                or
              </span>
              <SearchButton className="inline-flex h-9 w-full max-w-xs select-none items-center whitespace-nowrap rounded-lg bg-zinc-900/10 px-3 text-sm font-semibold tracking-tight text-zinc-700 transition hover:bg-zinc-900/20 dark:bg-white/20 dark:text-white dark:highlight-white/10 dark:hover:bg-white/10">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Quick search...</span>
                </div>
              </SearchButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-screen-xl grid-cols-3 gap-6 px-8">
        <div className="rounded-lg bg-zinc-900/5 p-4 dark:bg-white/5 dark:highlight-white/10">
          1
        </div>
        <div className="rounded-lg bg-zinc-900/5 p-4 dark:bg-white/5 dark:highlight-white/10">
          2
        </div>
        <div className="rounded-lg bg-zinc-900/5 p-4 dark:bg-white/5 dark:highlight-white/10">
          3
        </div>
      </div>
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: FullPageLayout,
}
