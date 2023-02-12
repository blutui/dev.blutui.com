import React, { useEffect, useRef } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import scrollIntoView from 'scroll-into-view-if-needed'

export interface Item {
  title?: string
  type?: string
  url?: string
  items?: Item[]
}

const Folder = ({ item }: { item: Item }) => {
  const { pathname: route } = useRouter()

  const active = item.url && [route, route + '/'].includes(item.url + '/')

  return (
    <li className={cn('flex flex-col gap-1', { active })}>
      <h2 className="px-3 py-1 text-sm font-semibold tracking-tight text-zinc-800 dark:text-white">
        {item.title}
      </h2>
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
  const { pathname: route } = useRouter()

  const active = item.url && [route, route + '/'].includes(item.url + '/')

  return (
    <li className={cn('relative flex flex-col gap-1', { active })}>
      {item.url && (
        <Link
          href={item.url}
          className={cn(
            'flex cursor-pointer rounded-md px-3 py-1 text-sm transition-colors [word-break:break-word]',
            active
              ? 'bg-han-50 font-bold text-han-500 highlight-white/5 before:absolute before:inset-y-1.5 before:-left-3 before:border-l before:border-current dark:bg-han-500/20 dark:text-han-200'
              : 'font-medium text-zinc-700 hover:bg-zinc-100 hover:highlight-white/5 dark:text-zinc-400 dark:hover:bg-han-100/5 dark:hover:text-zinc-50'
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

export const Quicklinks = () => {
  const Item = ({
    name,
    href,
    children,
  }: {
    name: string
    href: string
    children?: React.ReactNode
  }) => {
    const { pathname: route } = useRouter()
    const active = href && [route, route + '/'].some((r) => r.includes(href))

    return (
      <li>
        <Link
          href={href}
          className={cn(
            'group flex items-center font-semibold tracking-tight transition lg:text-sm',
            active
              ? 'text-zinc-700 dark:text-han-200'
              : 'text-zinc-600 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300'
          )}
        >
          <div
            className={cn(
              'mr-3 rounded-md p-1 transition',
              active
                ? 'bg-gradient-to-br from-han-400 to-han-500 text-white highlight-white/10'
                : 'ring-1 ring-black/10 dark:ring-white/10'
            )}
          >
            {children}
          </div>
          {name}
        </Link>
      </li>
    )
  }

  return (
    <div className="mb-6 mt-2">
      <ul className="space-y-3 px-3">
        <Item name="Documentation" href="/docs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </Item>
        <Item name="Changelog" href="/changelog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </Item>
      </ul>
    </div>
  )
}

export interface SidebarProps {
  items: Item[]
  className?: string
}

export const Sidebar = ({ items, className }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeElement = sidebarRef.current?.querySelector('li.active')

    if (activeElement && window.innerWidth > 767) {
      const scroll = () => {
        scrollIntoView(activeElement, {
          block: 'center',
          inline: 'center',
          scrollMode: 'always',
          boundary: containerRef.current,
          behavior: 'smooth',
        })
      }
      scroll()
    }
  })

  return (
    <>
      <aside
        className="blutui-sidebar-container sticky top-[3.75rem] -mt-px flex w-72 flex-shrink-0 flex-col self-start border-r border-black/5 dark:border-white/5"
        ref={containerRef}
      >
        <div
          className="blutui-scrollbar h-sidebar flex-shrink-0 flex-grow overflow-y-auto p-4 pl-0"
          ref={sidebarRef}
        >
          <Quicklinks />
          <Menu className="hidden md:flex" items={items} />
        </div>
      </aside>
    </>
  )
}
