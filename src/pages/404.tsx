import React from 'react'

const Error = () => {
  return (
    <div className="flex flex-auto flex-col items-center justify-center px-4 py-12 text-center sm:flex-row">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-700 dark:border-zinc-700 dark:text-zinc-200 sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl">
        404
      </h1>
      <h2 className="text-lg text-zinc-500 dark:text-zinc-400">
        This page could not be found.
      </h2>
    </div>
  )
}

export default Error
