import { Logo } from 'components/logo'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const logo = (
  <>
    <Logo className="-mb-0.5 h-7" />
  </>
)

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/blutui',
    links: [
      {
        text: 'Help center',
        url: 'https://help.blutui.com',
        secondary: true,
      },
      {
        text: 'Console',
        url: 'https://console.blutui.com',
        secondary: true,
      },
    ],
    themeSwitch: {
      mode: 'light-dark',
    },
    nav: {
      title: <>{logo}</>,
      transparentMode: 'top',
    },
  }
}
