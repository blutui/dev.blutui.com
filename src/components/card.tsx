import React from 'react'
import Link from 'next/link'
import cn from 'clsx'

export interface CardProps {
  title?: string
  href?: string
  children?: React.ReactNode
}

export const Card = ({ title, href, children }: CardProps) => {
  const classes =
    'not-prose transition flex bg-zinc-900/5 dark:bg-white/5 rounded-xl p-6 border-0 ring-1 ring-zinc-900/10 dark:ring-white/10 mb-5'

  const markup = (
    <div className="m-0 font-normal text-zinc-700 dark:text-zinc-400">
      {title ? (
        <h2 className="font-semibold text-zinc-900 dark:text-white">{title}</h2>
      ) : null}
      {children}
    </div>
  )

  return href ? (
    <Link
      href={href}
      className={cn([
        classes,
        'cursor-pointer hover:bg-zinc-900/10 dark:hover:bg-white/10',
      ])}
    >
      {markup}
    </Link>
  ) : (
    <div className={classes}>{markup}</div>
  )
}
