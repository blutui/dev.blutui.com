import { useArticleContext } from '@/context/article-context'

const trimSlashes = (str: string): string => {
  str = str.startsWith('/') ? str.substring(1) : str
  return str
}

export function Contribution() {
  let relativePath: string | null = null
  const articleContext = useArticleContext()

  if (articleContext) {
    if (articleContext.filePath) {
      relativePath = trimSlashes(articleContext.filePath)
    }
  }

  const contributionHref = relativePath
    ? `https://github.com/blutui/dev.blutui.com/edit/main/src/pages/${relativePath}`
    : 'https://github.com/blutui/dev.blutui.com'

  return (
    <div className="flex flex-col gap-2">
      <a
        className="text-xs font-medium text-zinc-500 transition hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-500"
        href="https://github.com/blutui/dev.blutui.com/issues"
        target="_blank"
        rel="noreferrer"
      >
        Question? Give us feedback →
      </a>
      <a
        className="text-xs font-medium text-zinc-500 transition hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-500"
        href={contributionHref}
      >
        Edit this page on GitHub
      </a>
    </div>
  )
}
