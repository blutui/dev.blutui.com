import React from 'react'

export interface ArticleProps {
  children?: React.ReactNode
}

export const Article = ({ children }: ArticleProps) => {
  return React.createElement(
    'article',
    { className: 'mb-6 text-gray-700 dark:text-gray-200' },
    children
  )
}
