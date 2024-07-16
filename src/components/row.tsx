import cn from 'clsx'

export interface RowProps {
  children?: React.ReactNode
}

export function Row({ children }: RowProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2'
      )}
    >
      {children}
    </div>
  )
}
