import React from 'react'
import Link, { LinkProps } from 'next/link'

export type AppLinkProps = LinkProps & {
  className?: string
  children?: React.ReactNode
}

export const AppLink = ({ children, ...props }: AppLinkProps) => {
  const target = props.href.toString().startsWith('http') ? '_blank' : undefined

  return (
    <Link
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={props.className}
      {...props}
    >
      {children}
    </Link>
  )
}
