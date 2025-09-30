import cn from 'clsx'

export interface ArticleProps {
  children?: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  const proseP = cn('prose-p:text-zinc-700 prose-p:dark:text-zinc-400')
  const proseStrong = cn('prose-strong:text-zinc-800 prose-strong:dark:text-zinc-300')
  const proseHeadings = cn(
    'prose-headings:tracking-tight prose-headings:font-semibold prose-headings:scroll-mt-34 prose-headings:dark:text-zinc-200'
  )
  const proseA = cn(
    'prose-a:font-medium prose-a:no-underline prose-a:border-b prose-a:border-han-500 prose-a:hover:border-b-2 prose-a:dark:text-white prose-a:dark:border-han-400'
  )
  const proseCode = cn(
    'prose-code:font-fira-code prose-code:border prose-code:border-dashed prose-code:border-han-200 prose-code:dark:border-han-500 prose-code:font-medium prose-code:before:content-none prose-code:after:content-none prose-code:text-han-500 prose-code:dark:text-han-200 prose-code:py-px prose-code:px-0.5'
  )
  const prosePre = cn('prose-pre:flex prose-pre:p-4 prose-pre:rounded-xl')
  const proseTh = cn('prose-th:text-left')
  const proseLi = cn('prose-li:text-zinc-700 prose-li:dark:text-zinc-400')

  return (
    <article
      className={cn(
        'prose prose-zinc mx-auto mb-6 w-full max-w-none',
        proseP,
        proseStrong,
        proseHeadings,
        proseA,
        proseCode,
        prosePre,
        proseTh,
        proseLi
      )}
    >
      {children}
    </article>
  )
}
