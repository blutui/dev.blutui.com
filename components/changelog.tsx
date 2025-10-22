interface ChangelogProps {
  date: string
  type?: string
  app?: string
  children: React.ReactNode
}

export function Changelog({ date, type, app, children }: ChangelogProps) {
  const id = date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <section
      id={id}
      className="flex w-full scroll-m-32 flex-col items-start gap-2 border-b border-dashed py-4"
      aria-labelledby={`${id}-heading`}
    >
      <div className="not-prose flex w-full shrink-0 flex-col items-start justify-start">
        <h3 id={`${id}-heading`} className="flex grow-0 flex-wrap items-center gap-2.5">
          <time
            dateTime={date}
            className="inline-flex font-mono text-xs font-semibold tracking-tight text-neutral-500 uppercase"
          >
            {formattedDate}
          </time>
          {type && (
            <span className="inline-flex rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono text-xs font-semibold uppercase dark:bg-neutral-800">
              {type}
            </span>
          )}
        </h3>
      </div>
      <div className="prose-p:my-3 flex w-full max-w-full flex-1 flex-col px-0.5 lg:flex-row lg:gap-4">
        <div className="flex-1">{children}</div>
        {app && (
          <div className="shrink-0 lg:mt-3">
            <span className="font-mono text-xs font-semibold text-neutral-500 uppercase">{app}</span>
          </div>
        )}
      </div>
    </section>
  )
}
