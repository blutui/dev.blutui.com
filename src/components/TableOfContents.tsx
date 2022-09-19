import React, { useEffect, useState } from 'react'
import Link from 'next/link'

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
      <h5 className="text-gray-900 dark:text-gray-200 font-semibold text-sm mb-4">
        On this page
      </h5>
      <ul className="text-gray-600 text-sm">
        {items.map((item) => {
          const href = `#${item.id}`
          const active = activeId === item.id

          return (
            <li
              key={item.title}
              className={[item.level === 3 ? 'ml-4' : undefined]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href} passHref>
                <a
                  className={[
                    'block py-1 font-medium transition',
                    active
                      ? 'text-indigo-500'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
