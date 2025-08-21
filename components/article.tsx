import cn from 'clsx'

export interface ArticleProps {
  children?: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  const proseP = cn('prose-p:text-zinc-700 prose-p:dark:text-zinc-400')
  const proseHeadings = cn(
    'prose-headings:tracking-tight prose-headings:scroll-mt-34 prose-headings:dark:text-zinc-200'
  )
  const proseA = cn(
    'prose-a:font-semibold prose-a:no-underline prose-a:border-b prose-a:border-han-500 prose-a:hover:border-b-2 prose-a:dark:text-white prose-a:dark:border-han-400'
  )
  const proseCode = cn(
    'prose-code:rounded-md prose-code:bg-han-50 prose-code:font-semibold prose-code:before:content-none prose-code:after:content-none prose-code:text-han-500 prose-code:py-px prose-code:px-0.5'
  )
  const prosePre = cn('prose-pre:flex prose-pre:p-4 prose-pre:rounded-xl')
  const proseTh = cn('prose-th:text-left')

  return (
    <article
      className={cn(
        'prose prose-zinc mx-auto mb-6 w-full max-w-none',
        proseP,
        proseHeadings,
        proseA,
        proseCode,
        prosePre,
        proseTh
      )}
    >
      {children}
    </article>
  )
}
