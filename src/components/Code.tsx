import React, { useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import cn from 'clsx'

export interface CodeProps {
  children?: React.ReactNode
  'data-language': any
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

Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true,
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true,
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: 'keyword',
  },
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

export const Code = ({ children, 'data-language': language }: CodeProps) => {
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false)
  }, [children])

  const lang = language === 'md' ? 'markdoc' : language || 'markdoc'

  return (
    <div className="code not-prose" aria-live="polite">
      <pre key={children as any} ref={ref} className={cn(`language-${lang}`)}>
        <code>{children}</code>
      </pre>
    </div>
  )
}
