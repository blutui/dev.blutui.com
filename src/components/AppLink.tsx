import React from 'react'
import Link, { LinkProps } from 'next/link'

export type AppLinkProps = LinkProps & {
  children?: React.ReactNode
  target?: '_self' | '_blank' | '_parent' | '_top'
}

export const AppLink = ({ children, ...props }: AppLinkProps) => {
  const target =
    props.target ||
    (props.href.toString().startsWith('http') ? '_blank' : undefined)

  return (
    <Link {...props} passHref>
      <a
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    </Link>
  )
}
