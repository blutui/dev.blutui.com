import React from 'react'

export interface ArticleProps {
  children?: React.ReactNode
}

export const Article = ({ children }: ArticleProps) => {
  return React.createElement(
    'article',
    { className: 'mb-6 prose dark:prose-dark max-w-screen-md mx-auto' },
    children
  )
}
