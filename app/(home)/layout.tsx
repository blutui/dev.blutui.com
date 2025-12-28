import { HomeLayout } from 'components/layout/home'
import { baseOptions } from 'lib/layout.shared'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { ...base } = baseOptions()

  return (
    <HomeLayout
      {...base}
      links={[
        { text: 'Developers', url: '/docs' },
        { text: 'Project', url: '/api-reference' },
        { text: 'Console', url: '/console' },
        { text: 'Guides', url: '/guides/introduction' },
        {
          text: 'References',
          url: '/api-reference',
          items: [
            {
              text: 'API Reference',
              url: '/api-reference',
            },
            {
              text:'Canvas',
              url: '/canvas/getting-started/expressions',
            },
            {
              text: 'Changelog',
              url: '/changelog',
            },
          ],
        },
      ]}
    >
      {children}
    </HomeLayout>
  )
}
