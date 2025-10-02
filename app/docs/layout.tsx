import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { source } from 'lib/source'
import { baseOptions } from 'lib/layout.shared'

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions()

  return (
    <DocsLayout {...base} tree={source.pageTree} nav={{ ...base.nav }}>
      {children}
    </DocsLayout>
  )
}
