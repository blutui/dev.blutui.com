import React from 'react'
import cn from 'clsx'

const TypeToEmoji = {
  caution: '🚫',
  check: '✨',
  note: 'ℹ️',
  warning: '⚠️',
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  caution: cn(
    'from-red-200 to-red-100 dark:from-red-900 dark:to-red-950 text-red-900 dark:text-red-200 ring-red-100 dark:ring-red-900/50'
  ),
  check: cn(
    'from-green-200 to-green-100 dark:from-green-900 dark:to-green-950 text-green-900 dark:text-green-200 ring-green-200/50 dark:ring-green-900/50'
  ),
  note: cn(
    'from-blue-200 to-blue-100 dark:from-blue-900 dark:to-blue-950 text-blue-900 dark:text-blue-200 ring-blue-100/50 dark:ring-blue-900/50'
  ),
  warning: cn(
    'from-yellow-200 to-yellow-100 dark:from-yellow-900 dark:to-yellow-950 text-yellow-900 dark:text-yellow-100 ring-yellow-100 dark:ring-yellow-900/50'
  ),
}

export interface CalloutProps {
  type: CalloutType
  children?: React.ReactNode
  title?: string
}

export const Callout = ({ type, children, title }: CalloutProps) => {
  const emoji = TypeToEmoji[type]

  return (
    <div
      className={cn(
        'callout mt-6 flex items-center rounded-lg bg-gradient-to-r px-4 py-3 ring-1 ring-inset',
        classes[type]
      )}
    >
      <div
        className="mr-3 select-none text-xl"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 text-sm font-semibold prose-p:mb-0 prose-p:mt-0">
        {children}
      </div>
    </div>
  )
}
