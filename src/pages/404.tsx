import React from 'react'

const Error = () => {
  return (
    <div className="flex flex-auto items-center justify-center text-center px-4 py-12 flex-col sm:flex-row">
      <h1 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-200 font-bold tracking-tight sm:pr-6 sm:mr-6 sm:border-r dark:border-gray-700">
        404
      </h1>
      <h2 className="text-lg text-gray-500 dark:text-gray-400">
        This page could not be found.
      </h2>
    </div>
  )
}

export default Error
