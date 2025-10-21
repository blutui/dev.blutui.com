import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from 'lib/layout.shared'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { ...base } = baseOptions()

  return (
    <HomeLayout
      {...base}
      links={[
        { text: 'Documentation', url: '/docs' },
        { text: 'API Reference', url: '/api-reference' },
        { text: 'Guides', url: '/guides/introduction' },
        { text: 'Changelog', url: '/changelog' },
      ]}
    >
      {children}
    </HomeLayout>
  )
}
