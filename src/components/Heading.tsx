import React from 'react'
import cn from 'clsx'

export interface HeadingProps {
  id?: string
  level: number
  children?: React.ReactNode
  className?: string
}

export const Heading = ({
  id = '',
  level = 1,
  children,
  className,
}: HeadingProps) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component id={id} className={cn('heading', className)}>
      {children}
    </Component>
  )
}
