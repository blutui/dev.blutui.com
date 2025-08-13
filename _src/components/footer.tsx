import cn from 'clsx'

import { ThemeToggle } from './theme-toggle'

export interface FooterProps {
  fullwidth?: boolean
}

export function Footer({ fullwidth = true }: FooterProps) {
  return (
    <footer
      className={cn(
        'mx-auto max-w-8xl border-t border-black/5 pb-16 pt-8 dark:border-white/5',
        fullwidth ? 'px-8' : null
      )}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            Copyright &copy; {new Date().getFullYear()} Blutui.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  )
}
