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
  default:
    'bg-zinc-200/20 dark:bg-zinc-700/20 ring-zinc-200 dark:ring-zinc-700 text-zinc-600 dark:text-zinc-300',
  info: 'bg-blue-200/20 dark:bg-blue-900/20 ring-blue-200 dark:ring-blue-900 text-blue-600 dark:text-blue-200',
  success:
    'bg-green-200/20 dark:bg-green-900/20 ring-green-200 dark:ring-green-900 text-green-700 dark:text-green-200',
  attention:
    'bg-yellow-200/20 dark:bg-yellow-900/20 ring-yellow-200 dark:ring-yellow-900 text-yellow-700 dark:text-yellow-200',
  warning:
    'bg-red-200/20 dark:bg-red-900/20 ring-red-200 dark:ring-red-900 text-red-600 dark:text-red-300',
  critical: '',
}

export const Badge = ({ status, children }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-semibold ring-1',
        classes[status]
      )}
    >
      {children}
    </span>
  )
}
