import cn from 'clsx'

export interface ColumnProps {
  sticky?: boolean
  children?: React.ReactNode
}

export function Column({ sticky, children }: ColumnProps) {
  return (
    <div
      className={cn(
        'mt-0 [&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky ? 'xl:sticky xl:top-36' : null
      )}
    >
      {children}
    </div>
  )
}
