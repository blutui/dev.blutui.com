interface ChangelogProps {
  date: string
  children: React.ReactNode
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
      className="flex w-full scroll-m-32 flex-col items-start gap-2 py-8 lg:flex-row lg:gap-6"
      aria-labelledby={`${id}-heading`}
    >
      <div className="not-prose top-32 flex w-full shrink-0 flex-col items-start justify-start lg:sticky lg:w-40">
        <div
          id={`${id}-heading`}
          className="bg-fd-primary/10 text-fd-primary flex flex-grow-0 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium"
        >
          <a href={`#${id}`}>{formattedDate}</a>
        </div>
      </div>
      <div className="max-w-full flex-1 px-0.5">
        <div>{children}</div>
      </div>
    </section>
  )
}
