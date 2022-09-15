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
      <main className="flex-1 my-8 px-8 mx-auto w-full max-w-8xl flex items-start space-x-6">
        {children}
      </main>
    </>
  )
}
