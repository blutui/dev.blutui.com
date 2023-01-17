import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import cn from 'clsx'

import type { Section } from '../utils/collectHeadings'
import { useActiveId } from '../hooks/useActiveId'

export interface TableOfContentsProps {
  toc: Section[]
}

export const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )

  const activeId = useActiveId(items)

  if (items.length <= 1) {
    return null
  }

  return (
    <nav>
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
              <Link
                href={href}
                shallow
                className={cn(
                  'block py-1 font-medium transition',
                  active
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300'
                )}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
