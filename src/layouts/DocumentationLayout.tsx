import React from 'react'

import { Contribution } from '../components/Contribution'
import { TableOfContents } from '../components/TableOfContents'

import type { Section } from '../utils/collectHeadings'

export interface DocumentationLayoutProps {
  layoutProps: any
  toc: Section[]
  children: React.ReactNode
}

export const DocumentationLayout = ({
  layoutProps,
  toc,
  children,
}: DocumentationLayoutProps) => {
  return (
    <>
      <main className="mx-auto flex w-full max-w-8xl flex-1 items-start space-x-8 py-10 px-8">
        <div className="sticky top-[6.25rem] w-72 flex-shrink-0 rounded-lg border border-black/10 py-6 dark:border-white/10"></div>
        <div className="flex flex-auto items-start space-x-8">
          <div className="flex-auto">{children}</div>
          <div className="sticky top-[6.25rem] w-64 flex-shrink-0 space-y-6">
            <TableOfContents toc={toc} />
            <Contribution />
          </div>
        </div>
      </main>
    </>
  )
}
