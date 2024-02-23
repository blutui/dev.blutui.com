import cn from 'clsx'

export interface StepProps {
  id: string
  title: string
  position: number
  children?: React.ReactNode
}

export function Step({ id, title, position, children }: StepProps) {
  position = Number(position)

  return (
    <div
      id={`step-${position}`}
      className="step grid-cols-[3rem_minmax(0,_1fr)] md:grid"
    >
      <div className="not-prose relative flex-shrink-0 md:w-12">
        <div className="absolute -bottom-2.5 -top-3 left-3.5 hidden w-px bg-zinc-200 dark:bg-zinc-800 md:top-2.5 md:block"></div>
        <div
          className={cn(
            'relative flex h-7 w-7 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold dark:bg-zinc-700',
            position === 1 ? 'mt-2' : 'mt-8'
          )}
        >
          {position}
        </div>
      </div>
      <div
        className={cn(
          'relative md:flex-1',
          position === 1 ? 'md:pt-0' : 'md:pt-6'
        )}
      >
        <div className="not-prose mb-4 mt-2">
          <h3
            id={id}
            className="heading scroll-mt-[8.5rem] text-lg font-semibold dark:text-zinc-200"
          >
            {title}
          </h3>
        </div>
        <div className="step-content w-full prose-p:my-4 prose-p:last:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}
