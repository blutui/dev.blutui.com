import { Logo } from 'components/logo'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const logo = (
  <>
    <Logo className="-mb-1 h-7" />
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
