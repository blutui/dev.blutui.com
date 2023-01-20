import { FullPageLayout } from '@/layouts/FullPageLayout'

import type { NextPageWithCustomLayout } from '@/types'

const Home: NextPageWithCustomLayout = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
        Welcome to{' '}
        <a
          href="https://blutui.com"
          className="text-indigo-500 hover:underline"
        >
          blutui.com
        </a>
      </h1>

      <p className="my-12 text-2xl text-gray-900 dark:text-gray-400">
        Get started by editing{' '}
        <code className="rounded-md bg-gray-100 px-3 py-2 font-mono text-base dark:bg-gray-800">
          pages/index.tsx
        </code>
      </p>
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: FullPageLayout,
}
