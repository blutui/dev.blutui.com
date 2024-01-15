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
    <Component
      id={id}
      className={cn(
        'heading group relative -ml-4 flex whitespace-pre-wrap pl-4',
        className
      )}
    >
      {level <= 3 && (
        <a
          className="absolute -ml-10 hidden h-full items-center border-0 opacity-0 group-hover:opacity-100 lg:flex"
          href={`#${id}`}
          aria-label="Navigate to heading"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 ring-1 ring-zinc-200 backdrop-blur transition hover:text-zinc-500 hover:ring-zinc-300 dark:ring-zinc-100/10 dark:hover:ring-zinc-100/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </a>
      )}
      <span>{children}</span>
    </Component>
  )
}
