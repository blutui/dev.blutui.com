import { Logo } from 'components/logo'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

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
