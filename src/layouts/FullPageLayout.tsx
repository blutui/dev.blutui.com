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
      <main
        id="content-wrapper"
        className="flex w-full flex-1 items-start space-x-6 px-8 py-10"
      >
        {children}
      </main>
      <footer className="max-w-8xl mx-auto border-t border-black/5 px-8 pb-16 pt-8 dark:border-white/5">
        <p className="text-xs text-zinc-600 dark:text-zinc-500">
          Copyright &copy; {new Date().getFullYear()} Blutui.
        </p>
      </footer>
    </>
  )
}
