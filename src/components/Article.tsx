import React from 'react'

export interface ArticleProps {
  children?: React.ReactNode
}

export const Article = ({ children }: ArticleProps) => {
  return (
    <article className="prose mx-auto mb-6 max-w-screen-md dark:prose-dark">
      {children}
    </article>
  )
}
