import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
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
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}
