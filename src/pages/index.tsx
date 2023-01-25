import { FullPageLayout } from '@/layouts/FullPageLayout'

import type { NextPageWithCustomLayout } from '@/types'
import Link from 'next/link'

const Home: NextPageWithCustomLayout = () => {
  return (
    <div className="relative -mx-8 -mt-[6.25rem] flex-grow overflow-hidden rounded-xl px-8 pt-[6.25rem] pb-10">
      <div className="absolute inset-0 -z-20 animate-pulse">
        <div className="h-full w-full bg-gradient-to-b from-purple-400 via-orange-300 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-dots from-zinc-50 to-zinc-50 bg-[length:14px_14px] dark:from-zinc-900 dark:to-zinc-900"></div>
      <div className="mx-auto max-w-screen-xl">
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
          <Link
            href="/docs"
            className="inline-flex h-9 select-none items-center whitespace-nowrap rounded-lg bg-indigo-500 px-4 text-sm font-semibold tracking-tight text-white transition highlight-white/10 hover:bg-indigo-400"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: FullPageLayout,
}
