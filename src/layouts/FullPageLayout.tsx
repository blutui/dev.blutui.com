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
      <footer className="mx-auto max-w-screen-xl border-t border-black/5 px-8 pt-8 pb-16 dark:border-white/5">
        <p className="text-xs text-zinc-600 dark:text-zinc-500">
          Copyright &copy; {new Date().getFullYear()} Blutui. Proudly New
          Zealand made.
        </p>
      </footer>
    </>
  )
}
