import React from 'react'
import cn from 'clsx'

type BadgeStatus =
  | 'default'
  | 'info'
  | 'success'
  | 'attention'
  | 'warning'
  | 'critical'

export interface BadgeProps {
  status: BadgeStatus
  children?: React.ReactNode
}

const classes: Record<BadgeStatus, string> = {
  default: 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300',
  info: 'bg-blue-200 dark:bg-blue-900 text-blue-600 dark:text-blue-200',
  success: 'bg-green-200 dark:bg-green-900 text-green-700 dark:text-green-200',
  attention:
    'bg-yellow-200 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200',
  warning: 'bg-red-200 dark:bg-red-900 text-red-700 dark:text-red-200',
  critical: '',
}

export const Badge = ({ status, children }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full py-0.5 px-3 text-sm font-semibold tracking-tight',
        classes[status]
      )}
    >
      {children}
    </span>
  )
}
