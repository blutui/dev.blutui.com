import { NextPage } from 'next'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <main className="min-h-screen py-16 flex flex-1 flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-indigo-500 hover:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="my-12 text-2xl text-center">
          Get started by editing{' '}
          <code className="bg-gray-100 px-3 py-2 text-base font-mono rounded-md">
            pages/index.tsx
          </code>
        </p>
      </main>
    </div>
  )
}

export default Home
