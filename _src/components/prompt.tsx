import { useEffect, useRef } from 'react'
import cn from 'clsx'

export interface PromptProps {
  children?: React.ReactNode
  className?: string
}

export function Prompt({ children, className }: PromptProps) {
  const ref = useRef(null)

  return (
    <div
      className={cn('not-prose relative mt-2', className)}
      aria-live="polite"
    >
      <div className="absolute top-0 z-10 w-full truncate rounded-t-xl bg-zinc-500/5 px-4 py-2 text-sm font-medium text-zinc-600 dark:bg-zinc-500/20 dark:text-zinc-300">
        Prompt
      </div>

      <div
        key={children as any}
        ref={ref}
        className="rounded-lg bg-zinc-500/5 px-4 pb-4 pt-12"
      >
        {children}
      </div>
    </div>
  )
}
