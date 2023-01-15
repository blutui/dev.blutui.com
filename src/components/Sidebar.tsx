import Link from 'next/link'
import React from 'react'

export interface Item {
  title?: string
  url?: string
  items?: Item[]
}

export interface SidebarProps {
  items: Item[]
  className?: string
}

export const Sidebar = ({ items, className }: SidebarProps) => {
  return (
    <ul
      className={['flex flex-col gap-1', className].filter(Boolean).join(' ')}
    >
      {items &&
        items.map((category, categoryIndex) => {
          const Item = category.url ? (
            <Link
              href={category.url}
              className="flex cursor-pointer rounded px-2 py-1.5 text-sm text-zinc-700 [word-break:break-word] hover:underline dark:text-zinc-300"
              scroll
              shallow
            >
              {category.title}
            </Link>
          ) : (
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              {category.title}
            </span>
          )
          return (
            <li key={categoryIndex}>
              {Item}
              {category.items && (
                <div className="overflow-hidden p-2 pr-0">
                  <Sidebar
                    items={category.items}
                    className="relative ml-1 pl-3 before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-black/10 before:dark:bg-white/10"
                  />
                </div>
              )}
            </li>
          )
        })}
    </ul>
  )
}
