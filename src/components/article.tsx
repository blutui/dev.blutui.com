export interface ArticleProps {
  children?: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return (
    <article className="prose mx-auto mb-6 w-full max-w-screen-md dark:prose-dark">
      {children}
    </article>
  )
}
