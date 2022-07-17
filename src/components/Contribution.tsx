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
    <div className="border rounded-lg p-6 max-w-xs">
      <h2 className="font-bold mb-4">Help us make these docs great!</h2>
      <p className="mb-4 text-zinc-600 text-sm">
        All Blutui docs are open source. See something that{"'"}s wrong or
        unclear? Submit a pull request.
      </p>
      <a
        className="border px-4 py-2 rounded-md font-semibold text-indigo-600 hover:border-gray-300 hover:bg-gray-100"
        href={contributionHref}
      >
        Make a contribution
      </a>
      <p className="mt-3 text-xs text-zinc-500">
        or{' '}
        <a
          className="text-indigo-500"
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
