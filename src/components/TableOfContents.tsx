import cn from 'clsx'
import { Contribution } from '@/components/Contribution'
import { useActiveId } from '@/hooks/useActiveId'
import type { Section } from '@/utils/collectHeadings'

export interface TableOfContentsProps {
  toc: Section[]
}

export const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )

  const activeId = useActiveId(items)

  return (
    <nav className="-mt-8 block w-64 flex-shrink-0 space-y-6">
      <div className="blutui-scrollbar sticky top-[3.75rem] -mr-8 -mt-px max-h-sidebar overflow-y-auto pr-8 pt-8">
        {items.length >= 1 && (
          <>
            <h5 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-200">
              On this page
            </h5>
            <ul className="text-sm text-zinc-600">
              {items.map((item) => {
                const href = `#${item.id}`
                const active = activeId === item.id

                return (
                  <li
                    key={item.id}
                    className={cn(item.level === 3 ? 'ml-4' : undefined)}
                  >
                    <a
                      href={href}
                      className={cn(
                        'block py-1 font-medium transition',
                        active
                          ? 'text-indigo-500 dark:text-indigo-400'
                          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300'
                      )}
                    >
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </>
        )}
        <div
          className={cn(
            items.length >= 1 ? 'mt-6 border-t pt-8' : null,
            'sticky bottom-0 border-black/10 bg-zinc-50 pb-8 dark:border-white/10 dark:bg-zinc-900'
          )}
        >
          <Contribution />
        </div>
      </div>
    </nav>
  )
}
