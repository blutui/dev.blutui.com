import { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider/next'

import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Blutui Developers',
    default: 'Blutui',
  },
  description: 'Welcome to Blutui',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={instrumentSans.className} suppressHydrationWarning>
      <body className="bg-neutral-50 dark:bg-neutral-900">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
