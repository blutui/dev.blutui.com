import React, { useEffect, useRef } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import scrollIntoView from 'scroll-into-view-if-needed'

export interface Item {
  title?: string
  type?: string
  url?: string
  items?: Item[]
}

const Folder = ({ item }: { item: Item }) => {
  const { asPath: route } = useRouter()

  const active = item.url && [route, route + '/'].includes(item.url + '/')

  return (
    <li className={cn('flex flex-col gap-1', { active })}>
      <span className="px-3 py-1 text-sm text-zinc-500">{item.title}</span>
      {Array.isArray(item.items) ? (
        <div className="overflow-hidden p-2 pr-0">
          <Menu
            className={cn(
              'relative before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-black/10 before:dark:bg-white/10',
              'ml-1 pl-3'
            )}
            items={item.items}
          />
        </div>
      ) : null}
    </li>
  )
}

const File = ({ item }: { item: Item }) => {
  const { asPath: route } = useRouter()

  const active = item.url && [route, route + '/'].includes(item.url + '/')

  return (
    <li className={cn('flex flex-col gap-1', { active })}>
      {item.url && (
        <Link
          href={item.url}
          className={cn(
            'flex cursor-pointer rounded-md px-3 py-1 text-sm transition-colors [word-break:break-word]',
            active
              ? 'bg-indigo-50 font-bold text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-300'
              : 'dark:bg-zinc- font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-indigo-100/5 dark:hover:text-zinc-50'
          )}
        >
          {item.title}
        </Link>
      )}
    </li>
  )
}

interface MenuProps {
  items: Item[]
  className?: string
}

const Menu = ({ items, className }: MenuProps) => {
  return (
    <ul className={cn('flex flex-col gap-1', className)}>
      {items.map((item, index) =>
        item.items && item.items.length ? (
          <Folder key={index} item={item} />
        ) : (
          <File key={index} item={item} />
        )
      )}
    </ul>
  )
}

export interface SidebarProps {
  items: Item[]
  className?: string
}

export const Sidebar = ({ items, className }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const activeElement = sidebarRef.current?.querySelector('li.active')

  //   if (activeElement && window.innerWidth > 767) {
  //     // const scroll = () => {
  //     //   scrollIntoView(activeElement, {
  //     //     block: 'center',
  //     //     inline: 'center',
  //     //     scrollMode: 'always',
  //     //     boundary: containerRef.current,
  //     //     behavior: 'smooth',
  //     //   })
  //     // }
  //     // scroll()
  //   }
  // })

  return (
    <>
      <aside
        className="sticky top-[3.75rem] -mt-px flex w-72 flex-shrink-0 flex-col self-start border-r border-black/5 dark:border-white/5"
        ref={containerRef}
      >
        <div
          className="blutui-scrollbar h-sidebar flex-shrink-0 flex-grow overflow-y-auto p-4 pl-0"
          ref={sidebarRef}
        >
          <Menu className="hidden md:flex" items={items} />
        </div>
      </aside>
    </>
  )
}
