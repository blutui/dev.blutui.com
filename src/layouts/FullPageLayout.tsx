import React from 'react'

export interface FullPageLayoutProps {
  layoutProps: any
  children: React.ReactNode
}

export const FullPageLayout = ({
  layoutProps,
  children,
}: FullPageLayoutProps) => {
  return (
    <>
      <main className="flex w-full flex-1 items-start space-x-6 py-10 px-8">
        {children}
      </main>
    </>
  )
}
