import cn from 'clsx'

import { ComputerDesktopMini } from './icons/computer-desktop'
import { MoonMini } from './icons/moon'
import { SunMini } from './icons/sun'

import { useTheme } from '@/utils/use-theme'

const settings: {
  value: 'dark' | 'light' | 'system'
  label: string
  icon: () => React.ReactNode
}[] = [
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonMini,
  },
  {
    value: 'light',
    label: 'Light',
    icon: SunMini,
  },
  {
    value: 'system',
    label: 'System',
    icon: ComputerDesktopMini,
  },
]

export interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [setting, setSetting] = useTheme()

  return (
    <div className="flex flex-shrink-0 items-center space-x-3">
      {settings.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          title={label}
          className={cn(
            'relative transition',
            setting === value
              ? 'text-han-400 dark:text-han-300'
              : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300'
          )}
          onClick={() => setSetting(value)}
        >
          <Icon />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current opacity-15 transition',
              setting === value ? 'scale-100' : 'scale-0'
            )}
          />
        </button>
      ))}
    </div>
  )
}
