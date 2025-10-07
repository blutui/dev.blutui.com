import { DocsLayout } from 'fumadocs-ui/layouts/notebook'

import { source } from 'lib/source'
import { baseOptions } from 'lib/layout.shared'
import { Banner } from 'components/banner'

export default function Layout({ children }: LayoutProps<'/[...slug]'>) {
  const { nav, ...base } = baseOptions()

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tabMode="navbar"
      tree={source.pageTree}
      sidebar={{
        collapsible: false,
        banner: <Banner />,
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node)
            if (!meta || !node.icon) return option

            const color = `var(--${meta.path.split('/')[0]}-color, var(--color-fd-foreground))`

            return {
              ...option,
              icon: (
                <div
                  className="size-full rounded-lg text-(--tab-color) max-md:border max-md:bg-(--tab-color)/10 max-md:p-1.5 [&_svg]:size-full"
                  style={{ '--tab-color': color } as object}
                >
                  {node.icon}
                </div>
              ),
            }
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  )
}
