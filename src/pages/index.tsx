import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <main className="py-16 flex flex-1 flex-col justify-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-200">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-indigo-500 hover:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="my-12 text-2xl text-gray-900 dark:text-gray-400">
          Get started by editing{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 text-base font-mono rounded-md">
            pages/index.tsx
          </code>
        </p>
      </main>
    </div>
  )
}

export default Home
