export interface ArticleProps {
  children?: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return (
    <article className="prose prose-zinc prose-p:text-zinc-700 prose-p:dark:text-zinc-400 prose-headings:tracking-tight prose-headings:scroll-mt-34 prose-headings:dark:text-zinc-200 prose-a:font-semibold prose-a:no-underline prose-a:border-b prose-a:border-han-500 prose-a:hover:border-b-2 prose-a:dark:text-white prose-a:dark:border-han-400">
      {children}
    </article>
  )
}
