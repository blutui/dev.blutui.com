import Link from 'next/link'
import React from 'react'

export interface Item {
  title?: string
  url?: string
  items?: Item[]
}

export interface SidebarProps {
  items: Item[]
}

export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <>
      {items &&
        items.map((category, categoryIndex) => {
          const Item = category.url ? (
            <Link href={category.url}>
              <a className="text-zinc-700 hover:underline dark:text-zinc-300">
                {category.title}
              </a>
            </Link>
          ) : (
            <span className="text-zinc-500 dark:text-zinc-500">
              {category.title}
            </span>
          )
          return (
            <div className="pl-4 text-sm" key={categoryIndex}>
              {Item}
              {category.items && <Sidebar items={category.items} />}
            </div>
          )
        })}
    </>
  )
}
