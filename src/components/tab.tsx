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
        role="tab"
        aria-selected={isActive}
      >
        <div
          className={cn(
            'rounded-md px-2 py-1',
            isActive
              ? 'bg-han-50 text-han-500 dark:bg-han-400/20 dark:text-han-100'
              : ''
          )}
        >
          {title}
        </div>
      </button>
      {children ? children : null}
    </>
  )
}
