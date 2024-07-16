import cn from 'clsx'

export interface TabProps {
  title: string
  isActive?: boolean
  children?: React.ReactNode
}

export function Tab({ title, isActive = true, children }: TabProps) {
  return (
    <>
      <button
        className={cn(
          'group flex items-center whitespace-nowrap px-1 py-2 text-sm font-semibold',
          isActive ? '' : ''
        )}
      >
        <div
          className={cn(
            'rounded-md px-2 py-1',
            isActive
              ? 'bg-zinc-300 text-zinc-700 highlight-white/5 dark:bg-zinc-400/30 dark:text-zinc-100'
              : 'text-zinc-600 dark:text-zinc-400'
          )}
        >
          {title}
        </div>
      </button>
      {children ? children : null}
    </>
  )
}
