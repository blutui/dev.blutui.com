import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import cn from 'clsx'

export interface CodeProps {
  'data-language': string
  children?: React.ReactNode
  filename?: string
}

Prism.languages.canvas = {
  comment: /^\{#[\s\S]*?#\}$/,
  'tag-name': {
    pattern: /(^\{%-?\s*)\w+/,
    lookbehind: true,
    alias: 'keyword',
  },
  delimiter: {
    pattern: /^\{[{%]-?|-?[%}]\}$/,
    alias: 'punctuation',
  },
  string: {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    inside: {
      punctuation: /^['"]|['"]$/,
    },
  },
  keyword: /\b(?:even|if|odd)\b/,
  boolean: /\b(?:false|null|true)\b/,
  number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
  operator: [
    {
      pattern:
        /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
      lookbehind: true,
    },
    /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
  ],
  punctuation: /[()\[\]{}:.,]/,
}

Prism.hooks.add('before-tokenize', (env) => {
  if (env.language !== 'canvas') {
    return
  }

  const pattern = /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g
  const markupTemplating = Prism.languages[
    'markup-templating'
  ] as Prism.Grammar & {
    buildPlaceholders: (
      env: Prism.hooks.TokenizeEnvironment,
      language: string,
      placeholderPattern: RegExp
    ) => any
  }
  markupTemplating.buildPlaceholders(env, 'canvas', pattern)
})

Prism.hooks.add('after-tokenize', (env) => {
  const markupTemplating = Prism.languages[
    'markup-templating'
  ] as Prism.Grammar & {
    tokenizePlaceholders: (
      env: Prism.hooks.TokenizeEnvironment,
      language: string
    ) => any
  }
  markupTemplating.tokenizePlaceholders(env, 'canvas')
})

export function Code({
  children,
  'data-language': language,
  filename,
}: CodeProps) {
  // const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false)
  }, [children])

  const lang = language === 'md' ? 'markdoc' : language || 'markdoc'

  return (
    <div className="not-prose relative" aria-live="polite">
      {filename && (
        <div className="absolute top-0 z-10 w-full truncate rounded-t-xl bg-zinc-500/30 px-4 py-2 text-sm font-medium text-zinc-300">
          {filename}
        </div>
      )}
      <pre
        key={children as any}
        ref={ref}
        className={cn(`language-${lang}`, filename ? 'px-4 pb-4 pt-12' : 'p-4')}
      >
        <code>{children}</code>
      </pre>
    </div>
  )
}
