import cn from 'clsx'

export interface StepProps {
  title: string
  position: number
  children?: React.ReactNode
}

export function Step({ title, position, children }: StepProps) {
  position = Number(position)

  return (
    <div id={`step-${position}`} className="step md:flex">
      <div className="not-prose relative flex-shrink-0 md:w-12 md:pr-12">
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
        className={cn('relative md:flex-1', position === 1 ? 'pt-0' : 'pt-6')}
      >
        <div className="not-prose mb-4 mt-2">
          <h3 className="text-lg font-semibold tracking-tight dark:text-zinc-300">
            {title}
          </h3>
        </div>
        <div className="prose-p:my-4 prose-p:last:mb-0">{children}</div>
      </div>
    </div>
  )
}
