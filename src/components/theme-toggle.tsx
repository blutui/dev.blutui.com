import cn from 'clsx'

import { useTheme } from '@/utils/use-theme'

export interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [setting, setSetting] = useTheme()

  return (
    <button
      className={cn(
        'relative block h-5 w-10 flex-shrink-0 rounded-full ring-1 transition dark:bg-white/5 dark:ring-white/10 hover:dark:ring-white/20',
        className
      )}
      type="button"
      role="switch"
      aria-checked="false"
    >
      <span
        className={cn(
          'absolute left-0.5 top-0.5 h-4 w-4 rounded-full dark:bg-white/30'
        )}
      >
        <span className="icon"></span>
      </span>
    </button>
  )
}
