import cn from 'clsx'

import { useArticleContext } from '@/context/article-context'

export interface ArticleProps {
  children?: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  const articleContext = useArticleContext()

  return (
    <article
      className={cn(
        'prose mx-auto mb-6 w-full dark:prose-dark',
        articleContext.api ? 'max-w-full' : 'max-w-screen-md'
      )}
    >
      {children}
    </article>
  )
}
