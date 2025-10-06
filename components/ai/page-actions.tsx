'use client'

import { useState } from 'react'
import { cn } from 'fumadocs-ui/utils/cn'
import { buttonVariants } from 'fumadocs-ui/components/ui/button'
import { useCopyButton } from 'fumadocs-ui/utils/use-copy-button'
import { Check, Copy } from 'lucide-react'

const cache = new Map<string, string>()

interface LLMCopyButtonProps {
  markdownUrl: string
}

export function LLMCopyButton({ markdownUrl }: LLMCopyButtonProps) {
  const [isLoading, setLoading] = useState(false)
  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl)
    if (cached) return navigator.clipboard.writeText(cached)

    setLoading(true)

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/plain': fetch(markdownUrl).then(async (res) => {
            const content = await res.text()
            cache.set(markdownUrl, content)

            return content
          }),
        }),
      ])
    } finally {
      setLoading(false)
    }
  })

  return (
    <button
      disabled={isLoading}
      className={cn(
        buttonVariants({
          color: 'secondary',
          size: 'sm',
          className: '[&_svg]:text-fd-muted-foreground gap-2 [&_svg]:size-3.5',
        })
      )}
      onClick={onClick}
    >
      {checked ? <Check /> : <Copy />}
      Copy page
    </button>
  )
}
