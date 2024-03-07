import cn from 'clsx'

const TypeToIcon = {
  check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  note: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  tip: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
    </svg>
  ),
  warning: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  ),
}

type CalloutType = keyof typeof TypeToIcon

const classes: Record<CalloutType, string> = {
  info: cn(
    'from-zinc-200 to-zinc-100 dark:from-zinc-700 dark:to-zinc-800 text-zinc-900 dark:text-zinc-100 ring-zinc-200/50 dark:ring-zinc-700/50'
  ),
  check: cn(
    'from-green-200 to-green-100 dark:from-green-900 dark:to-green-950 text-green-900 dark:text-green-200 ring-green-200/50 dark:ring-green-900/50'
  ),
  tip: cn(
    'from-green-200 to-green-100 dark:from-green-900 dark:to-green-950 text-green-900 dark:text-green-200 ring-green-200/50 dark:ring-green-900/50'
  ),
  note: cn(
    'from-blue-200 to-blue-100 dark:from-blue-900 dark:to-blue-950 text-blue-900 dark:text-blue-200 ring-blue-100/50 dark:ring-blue-900/50'
  ),
  warning: cn(
    'from-yellow-200 to-yellow-100 dark:from-yellow-900 dark:to-yellow-950 text-yellow-900 dark:text-yellow-100 ring-yellow-100 dark:ring-yellow-900/50'
  ),
}

export interface CalloutProps {
  type: CalloutType
  children?: React.ReactNode
  title?: string
}

export function Callout({ type, children, title }: CalloutProps) {
  const Emoji = TypeToIcon[type]

  return (
    <div
      className={cn(
        'callout mt-6 flex items-center rounded-lg bg-gradient-to-r px-4 py-3 ring-1 ring-inset',
        classes[type]
      )}
    >
      <div className="mr-3 select-none text-xl opacity-50">
        <Emoji />
      </div>
      <div className="w-full min-w-0 text-sm font-semibold prose-p:m-0">
        {children}
      </div>
    </div>
  )
}
