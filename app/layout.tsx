import { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
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
    <html lang="en" className={`font-fira-code ${firaCode.variable}`}>
      <body className="bg-neutral-50 dark:bg-neutral-900">{children}</body>
    </html>
  )
}
