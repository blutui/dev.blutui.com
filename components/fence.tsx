import cn from 'clsx'

import { getHighlighter } from 'utils/shiki'

export interface FenceProps {
  'data-language': string
  children?: React.ReactNode
  className?: string
  content?: string
  filename?: string
}

export async function Fence({ content, 'data-language': language, className, children }: FenceProps) {
  const code = content || (children as string)

  const highlighter = await getHighlighter()

  const out = highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      light: 'light-plus',
      dark: 'dark-plus',
    },
  })

  return (
    <div className="group relative">
      <span className="pointer-events-none absolute inset-0 border border-dashed border-neutral-400 dark:border-neutral-600"></span>

      <div
        className="h-full w-0 max-w-full min-w-full overflow-x-auto bg-white px-4 py-3.5 dark:bg-[var(--shiki-dark-bg)]"
        style={{ '--shiki-dark-bg': '#1E1E1E' } as React.CSSProperties}
      >
        <div
          className={cn(
            'not-prose font-mono text-sm whitespace-pre [&_pre>code]:z-1 [&_pre>code]:block [&_pre>code]:w-max [&_pre>code]:pr-8',
            className
          )}
          dangerouslySetInnerHTML={{ __html: out }}
        />
      </div>

      <svg
        width="7"
        height="7"
        viewBox="0 0 5 5"
        className="absolute top-[-3px] left-[-3px] fill-neutral-400 dark:fill-neutral-500"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg
        width="7"
        height="7"
        viewBox="0 0 5 5"
        className="absolute top-[-3px] right-[-3px] fill-neutral-400 dark:fill-neutral-500"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg
        width="7"
        height="7"
        viewBox="0 0 5 5"
        className="absolute bottom-[-3px] left-[-3px] fill-neutral-400 dark:fill-neutral-500"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg
        width="7"
        height="7"
        viewBox="0 0 5 5"
        className="absolute right-[-3px] bottom-[-3px] fill-neutral-400 dark:fill-neutral-500"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
    </div>
  )
}
