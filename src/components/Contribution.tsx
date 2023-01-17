import { useArticleContext } from '../context/ArticleContext'

const trimSlashes = (str: string): string => {
  str = str.startsWith('/') ? str.substring(1) : str
  return str
}

export const Contribution = () => {
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
    <div className="max-w-xs rounded-lg border p-6 dark:border-zinc-700">
      <h2 className="mb-4 font-semibold tracking-tight text-zinc-700 dark:text-zinc-200">
        Help us make these docs great!
      </h2>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        All Blutui docs are open source. See something that{"'"}s wrong or
        unclear? Submit a pull request.
      </p>
      <a
        className="rounded-md border px-4 py-2 font-semibold text-indigo-600 transition hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:text-indigo-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-100/10"
        href={contributionHref}
      >
        Make a contribution
      </a>
      <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
        or{' '}
        <a
          className="text-indigo-600 dark:text-indigo-400"
          href="https://github.com/blutui/dev.blutui.com/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn how to contribute
        </a>
      </p>
    </div>
  )
}
