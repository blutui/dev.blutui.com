import React from 'react'
import Link, { LinkProps } from 'next/link'
import cn from 'clsx'

export interface ButtonProps {
  href?: LinkProps['href']
  children?: React.ReactNode
}

export const Button = ({ href, children }: ButtonProps) => {
  let buttonMarkup

  const classes = cn(
    'bg-han-500 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-han-400 transition'
  )

  if (href) {
    buttonMarkup = (
      <Link href={href} className={cn(classes)}>
        {children}
      </Link>
    )
  } else {
    buttonMarkup = <button className={cn(classes)}>{children}</button>
  }

  return buttonMarkup
}
