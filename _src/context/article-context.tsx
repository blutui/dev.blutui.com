import { createContext, useContext } from 'react'

export type ArticleContextT = {
  filePath?: string
  title?: string
  description?: string
}

export const ArticleContext = createContext<ArticleContextT | null>(null)

export const useArticleContext = (): ArticleContextT => {
  const context = useContext(ArticleContext)

  if (!context) {
    throw new Error(
      '"useArticleContext" may only be used inside "ArticleContext.Provider"'
    )
  }

  return context
}
