import { useEffect, useRef, useState } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import scrollIntoView from 'scroll-into-view-if-needed'

import { APIMethod } from '@/navigation/api'
import { MinusMicro } from './icons/minus'
import { PlusMicro } from './icons/plus'

export interface Item {
  title?: string
  type?: string
  url?: string
  method?: APIMethod
  items?: Item[]
  expandable?: boolean
}

const Folder = ({ item }: { item: Item }) => {
  let { pathname: route } = useRouter()
  let expanded = item.expandable ? false : true
  const expandable = item.expandable ?? false

  if (route.startsWith('/api-reference')) {
    route = route.replace('/api-reference', '/api')
  }

  const itemUrls = item.items?.map((item) => item.url)

  const active = item.url && [route, route + '/'].includes(item.url + '/')
  const itemActive =
    item.items &&
    itemUrls &&
    itemUrls.filter((item) => [route, route + '/'].includes(item + '')).length
      ? true
      : false

  if (itemActive) {
    expanded = true
  }

  const [isExpanded, setIsExpanded] = useState<boolean>(expanded)

  return (
    <li className={cn('flex flex-col gap-1', { active })}>
      <h2
        className={cn(
          'group flex items-center justify-between px-3 py-1 text-sm font-semibold text-zinc-800 dark:text-white',
          expandable ? 'cursor-pointer' : null
        )}
        onClick={
          expandable
            ? () => setIsExpanded((isExpanded) => !isExpanded)
            : undefined
        }
      >
        <span>{item.title}</span>
        {expandable && (
          <span className="opacity-50 transition group-hover:opacity-100">
            {isExpanded ? <MinusMicro /> : <PlusMicro />}
          </span>
        )}
      </h2>
      {isExpanded && Array.isArray(item.items) ? (
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
  let { pathname: route } = useRouter()

  if (route.startsWith('/api-reference')) {
    route = route.replace('/api-reference', '/api')
  }

  const active = item.url && [route, route + '/'].includes(item.url + '/')

  return (
    <li className={cn('relative flex flex-col gap-1', { active })}>
      {item.url && (
        <Link
          href={item.url}
          className={cn(
            'flex cursor-pointer items-center justify-between rounded-md px-3 py-1 text-sm [word-break:break-word]',
            active
              ? 'bg-han-50 font-semibold text-han-500 highlight-white/5 before:absolute before:inset-y-1.5 before:-left-3 before:border-l before:border-current dark:bg-han-400/20 dark:text-han-100'
              : 'font-medium text-zinc-700 hover:bg-zinc-100 hover:highlight-white/5 dark:text-zinc-400 dark:hover:bg-han-100/5 dark:hover:text-zinc-50'
          )}
        >
          <span>{item.title}</span>
          {item.method && (
            <span
              className={cn(
                'ml-2 font-mono text-[0.625rem] font-semibold leading-none opacity-50'
              )}
            >
              {item.method}
            </span>
          )}
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

export function Quicklinks() {
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
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={cn(
            'group flex items-center font-semibold transition lg:text-sm',
            active
              ? 'text-zinc-700 dark:text-han-200'
              : 'text-zinc-600 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300'
          )}
        >
          <div
            className={cn(
              'mr-3 flex h-7 w-7 items-center justify-center rounded-md p-1 transition',
              active
                ? 'bg-gradient-to-br from-han-400 to-han-500 text-white highlight-white/10'
                : 'ring-1 ring-inset ring-black/10 dark:ring-white/10'
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
        <Item name="Discord" href="https://discord.gg/4H8dZW6Fva">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
            className="size-4"
          >
            <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241Z" />
          </svg>
        </Item>
        <Item name="GitHub" href="https://github.com/blutui">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
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
  quickLinks?: boolean
  children?: React.ReactNode
}

export const Sidebar = ({
  items,
  className,
  quickLinks = true,
  children,
}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)

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

  useEffect(() => {
    const childElement = childRef.current?.offsetHeight
    if (childElement) {
      setHeight(childElement)
    }
  }, [children])

  return (
    <>
      <aside
        className={cn(
          'sticky top-header hidden w-72 shrink-0 flex-col self-start border-r border-black/5 dark:border-white/5 lg:flex',
          className
        )}
        ref={containerRef}
      >
        <div ref={childRef}>{children}</div>
        <div
          className={cn(
            'blutui-scrollbar h-sidebar shrink-0 grow overflow-y-auto px-4 pl-0'
          )}
          style={{ height: `calc(100vh - 6.8125rem - ${height}px)` }}
          ref={sidebarRef}
        >
          <div className="sticky top-0 z-10 h-6 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-900"></div>
          {quickLinks && <Quicklinks />}
          <Menu className="hidden md:flex" items={items} />
          <div className="sticky bottom-0 z-10 h-6 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-900"></div>
        </div>
      </aside>
    </>
  )
}
