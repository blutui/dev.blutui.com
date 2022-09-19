import React from 'react'

import { Contribution } from '../components/Contribution'

export interface DocumentationLayoutProps {
  layoutProps: any
  children: React.ReactNode
}

export const DocumentationLayout = ({
  layoutProps,
  children,
}: DocumentationLayoutProps) => {
  return (
    <>
      <main className="flex-1 my-8 px-8 mx-auto w-full max-w-8xl flex items-start space-x-6">
        <div className="flex-shrink-0 sticky top-[5.8125rem] border border-black/10 dark:border-white/10 rounded-lg w-72 py-6"></div>
        <div className="flex-auto flex items-start space-x-6">
          <div className="flex-auto">{children}</div>
          <div className="flex-shrink-0 sticky top-[5.8125rem] w-64">
            <Contribution />
          </div>
        </div>
      </main>
    </>
  )
}
