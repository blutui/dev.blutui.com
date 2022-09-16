import React from 'react'

import { Contribution } from '../components/Contribution'
import { TableOfContents } from '../components/TableOfContents'

import type { Sections } from '../utils/collectHeadings'

export interface DocumentationLayoutProps {
  layoutProps: any
  toc: Sections[]
  children: React.ReactNode
}

export const DocumentationLayout = ({
  layoutProps,
  toc,
  children,
}: DocumentationLayoutProps) => {
  return (
    <>
      <main className="flex-1 my-8 px-8 mx-auto w-full max-w-8xl flex items-start space-x-8">
        <div className="flex-shrink-0 sticky top-[5.75rem] border border-black/10 dark:border-white/10 rounded-lg w-72 py-6"></div>
        <div className="flex-auto flex items-start space-x-8">
          <div className="flex-auto">{children}</div>
          <div className="flex-shrink-0 sticky top-[5.75rem] w-64 space-y-6">
            <TableOfContents toc={toc} />
            <Contribution />
          </div>
        </div>
      </main>
    </>
  )
}
