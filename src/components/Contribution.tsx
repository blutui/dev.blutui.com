export const Contribution = () => {
  const relativePath = null

  const contributionHref = relativePath
    ? `https://github.com/blutui/dev.blutui.com/edit/main/content/${relativePath}`
    : 'https://github.com/blutui/dev.blutui.com'

  return (
    <div className="border rounded-lg p-6 max-w-xs">
      <h2 className="font-bold mb-4">Help us make these docs great!</h2>
      <p className="mb-4 text-zinc-600 text-sm">
        All Blutui docs are open source. See something that{"'"}s wrong or
        unclear? Submit a pull request.
      </p>
      <a
        className="font-semibold text-indigo-500 hover:underline"
        href={contributionHref}
      >
        Make a contribution
      </a>
    </div>
  )
}
