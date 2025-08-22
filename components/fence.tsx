import { createHighlighter, Highlighter } from 'shiki'

let highlighter: Promise<Highlighter>

async function getHighlighter() {
  if (!highlighter) {
    highlighter = createHighlighter({
      langs: ['html', 'twig', 'bash'],
      langAlias: {
        canvas: 'twig',
      },
      themes: ['catppuccin-latte', 'catppuccin-mocha'],
    })
  }
  return highlighter
}

export interface FenceProps {
  'data-language': string
  children?: React.ReactNode
  content?: string
  process?: boolean
  filename?: string
}

export async function Fence({ content, 'data-language': language, process, children }: FenceProps) {
  const code = content || (children as string)

  const highlighter = await getHighlighter()

  const out = highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  })

  return (
    <div
      className="not-prose font-mono text-sm [&>pre]:rounded-xl [&>pre]:px-4 [&>pre]:py-3.5"
      dangerouslySetInnerHTML={{ __html: out }}
    />
  )
}
