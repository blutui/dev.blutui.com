export interface ParameterProps {
  name: string
  type: string
  required: boolean
  children?: React.ReactNode
}

export function Parameter({ name, type, required, children }: ParameterProps) {
  return (
    <div className="my-2.5 border-b border-zinc-200 pb-5 pt-2.5 dark:border-zinc-800">
      <div className="flex items-center gap-x-3">
        <span className="font-mono text-sm font-bold text-han-500 dark:text-han-200">
          {name}
        </span>
        <span className="size-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {type}
        </span>
        {required && (
          <>
            <span className="size-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <span className="font-mono text-xs text-red-500 dark:text-red-400">
              required
            </span>
          </>
        )}
      </div>
      <div className="prose-sm mt-1">{children}</div>
    </div>
  )
}
