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
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: FullPageLayout,
}
