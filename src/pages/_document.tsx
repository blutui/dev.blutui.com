import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <body className="relative h-full bg-zinc-50 dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
