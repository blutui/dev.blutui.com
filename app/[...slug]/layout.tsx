import { source } from 'lib/source'
import { baseOptions } from 'lib/layout.shared'
import { DocsLayout } from 'components/layout/notebook'

export default function Layout({ children }: LayoutProps<'/[...slug]'>) {
  const { nav, ...base } = baseOptions()

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: 'auto' }}
      tabMode="navbar"
      tree={source.pageTree}
      sidebar={{
        collapsible: false,
        tabs: [
          {
            title: 'Developers',
            url: '/docs',
          },
          {
            title: 'Project',
            url: '/project',
          },
          {
            title: 'Console',
            url: '/console',
          },
          {
            title: 'Guides',
            url: '/guides/introduction',
          },
          {
            title: 'References',
            url: '/api-reference',
            items: [
              {
                title: 'API Reference',
                url: '/api-reference',
              },
              {
                title: 'Changelog',
                url: '/changelog',
              },
            ],
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  )
}
