import Link, { LinkProps } from 'next/link'
import cn from 'clsx'

export interface ButtonProps {
  href?: LinkProps['href']
  className?: string
  children?: React.ReactNode
}

export function Button({ href, children, className }: ButtonProps) {
  let buttonMarkup

  const classes = cn(
    'bg-han-500 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-base font-semibold text-white shadow-xs hover:bg-han-400 transition',
    className
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
