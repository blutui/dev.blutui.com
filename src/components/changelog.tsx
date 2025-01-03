import React from 'react'

export interface ChangelogProps {
  date: string
  children?: React.ReactNode
}

export function Changelog({ date, children }: ChangelogProps) {
  const id = date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section
      id={id}
      className="scroll-mt-36 md:flex"
      aria-labelledby={`${id}-heading`}
    >
      <div className="not-prose pb-8 pl-7 md:w-1/4 md:pb-16 md:pl-0 md:pr-12 md:text-right">
        <h2
          id={`${id}-heading`}
          className="sticky top-36 mb-2 text-sm leading-6 text-zinc-500"
        >
          <a href={`#${id}`}>{formattedDate}</a>
        </h2>
      </div>
      <div className="relative pb-8 pl-7 pt-2 md:w-3/4 md:pb-16 md:pl-12 md:pt-0">
        <div className="absolute -bottom-2.5 -top-3 left-0 w-px bg-zinc-200 dark:bg-zinc-800 md:top-2.5"></div>
        <div className="absolute -left-1 -top-4 size-[0.5625rem] rounded-full border-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 md:top-[0.4375rem]"></div>
        <div className="prose-sm prose-h3:text-base">{children}</div>
      </div>
    </section>
  )
}
