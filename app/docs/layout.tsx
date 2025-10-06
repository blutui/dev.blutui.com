import { DocsLayout } from 'fumadocs-ui/layouts/notebook'

import { source } from 'lib/source'
import { baseOptions, tabItems } from 'lib/layout.shared'

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const { nav, ...base } = baseOptions()

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tabMode="navbar"
      tree={source.pageTree}
      sidebar={{
        collapsible: false,
        tabs: tabItems,
        prefetch: false,
      }}
    >
      {children}
    </DocsLayout>
  )
}
