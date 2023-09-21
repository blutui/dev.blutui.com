import React from 'react'
import Link from 'next/link'
import cn from 'clsx'

export interface CardProps {
  title?: string
  href?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const Card = ({ title, href, icon, children }: CardProps) => {
  const classes =
    'card not-prose transition flex bg-zinc-900/5 dark:bg-white/5 rounded-xl p-6 border-0 ring-1 ring-zinc-900/10 dark:ring-white/10'

  const titleMarkup = title && (
    <h2 className="font-semibold leading-tight text-zinc-900 dark:text-white">
      {title}
    </h2>
  )

  const markup = (
    <div className="m-0 w-full font-normal text-zinc-700 dark:text-zinc-400">
      <div className="mb-2 flex items-center gap-2">
        {icon && (
          <span className="text-black/60 opacity-60 dark:text-white/60">
            {icon}
          </span>
        )}
        {titleMarkup}
      </div>
      <div className="text-base">{children}</div>
    </div>
  )

  const isExternalLink = href && href.startsWith('http')

  return href ? (
    <Link
      href={href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
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
