export * from './custom-layout'

interface GlimeOptions {
  styles?: {
    baseFontSize?: number
    theme?: 'light' | 'dark' | 'auto'
  }
  hideCollapsedButton?: boolean
}

declare global {
  interface Window {
    glime: {
      init(clientId: string, glimeOptions?: GlimeOptions): (e: any) => void
      expand(): () => void
    }
  }
}
