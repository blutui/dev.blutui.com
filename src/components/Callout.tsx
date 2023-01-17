import React from 'react'
import cn from 'clsx'

const TypeToEmoji = {
  caution: '🚫',
  check: '✅',
  note: '💡',
  warning: '⚠️',
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  caution: cn('bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-200'),
  check: cn(
    'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-200'
  ),
  note: cn('bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200'),
  warning: cn(
    'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-200'
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
        'callout mt-6 flex items-center rounded-lg py-2.5 pr-4',
        classes[type]
      )}
    >
      <div
        className="select-none pl-3 pr-3 text-xl"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 text-sm font-medium prose-p:my-0">
        {children}
      </div>
    </div>
  )
}
