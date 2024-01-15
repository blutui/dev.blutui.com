import { Metadata } from 'next'

import '@/styles/main.css'
import AppProvider from './app-provider'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Blutui Developer Documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative h-full bg-zinc-50 dark:bg-zinc-900">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
