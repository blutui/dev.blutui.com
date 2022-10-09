import React from 'react'

export interface CodeProps {
  children?: React.ReactNode
  'data-language': any
}

export const Code = ({ children, 'data-language': language }: CodeProps) => {
  const ref = React.useRef(null)
  const lang = language === 'md' ? 'markdoc' : language || 'markdoc'

  return (
    <div aria-live="polite">
      <pre ref={ref} className={`language-${lang}`}>
        <code>{children}</code>
      </pre>
    </div>
  )
}
