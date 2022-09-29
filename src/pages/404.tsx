import React from 'react'

const Error = () => {
  return (
    <div className="flex flex-auto flex-col items-center justify-center px-4 py-12 text-center sm:flex-row">
      <h1 className="text-2xl font-bold tracking-tight text-gray-700 dark:border-gray-700 dark:text-gray-200 sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl">
        404
      </h1>
      <h2 className="text-lg text-gray-500 dark:text-gray-400">
        This page could not be found.
      </h2>
    </div>
  )
}

export default Error
