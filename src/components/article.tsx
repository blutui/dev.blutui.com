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
        'prose mb-6 w-full dark:prose-dark prose-th:text-left',
        articleContext.api
          ? typeof articleContext.api === 'string'
            ? 'max-w-full'
            : 'max-w-screen-md'
          : 'mx-auto max-w-screen-md'
      )}
    >
      {children}
    </article>
  )
}
