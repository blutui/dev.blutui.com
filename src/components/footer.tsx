import cn from 'clsx'

export interface FooterProps {
  fullwidth?: boolean
}

export function Footer({ fullwidth = true }: FooterProps) {
  return (
    <footer
      className={cn(
        'max-w-8xl mx-auto border-t border-black/5 pb-16 pt-8 dark:border-white/5',
        fullwidth ? 'px-8' : null
      )}
    >
      <p className="font-mono text-xs text-zinc-600 dark:text-zinc-500">
        Copyright &copy; {new Date().getFullYear()} Blutui.
      </p>
    </footer>
  )
}
