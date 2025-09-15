import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark h-full" lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `,
          }}
        />
      </Head>
      <body className="relative h-full bg-zinc-50 dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
