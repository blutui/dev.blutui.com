import { Logo } from 'components/logo'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { SidebarTab } from 'fumadocs-ui/utils/get-sidebar-tabs'
import { BookOpen, Code, GraduationCap, Logs } from 'lucide-react'

export const tabItems: SidebarTab[] = [
  {
    title: 'Documentation',
    url: '/docs',
    icon: <BookOpen className="size-full" />,
  },
  {
    title: 'API reference',
    url: '/reference',
    icon: <Code className="size-full" />,
  },
  {
    title: 'Guides',
    url: '/guides',
    icon: <GraduationCap className="size-full" />,
  },
  {
    title: 'Changelog',
    url: '/changelog',
    icon: <Logs className="size-full" />,
  },
]

export const logo = (
  <>
    <Logo className="h-6" />
  </>
)

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <>{logo}</>,
      transparentMode: 'top',
    },
  }
}
