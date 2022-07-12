import React from 'react'

export interface HeadingProps {
  id?: string
  level: number
  children?: React.ReactNode
  className?: string
}

export function Heading({
  id = '',
  level = 1,
  children,
  className,
}: HeadingProps) {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: ['heading', className].filter(Boolean).join(' '),
    },
    children
  )
}
