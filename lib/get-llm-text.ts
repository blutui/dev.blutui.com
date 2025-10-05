import { Page } from './source'

export async function getLLMText(page: Page) {
  const processed = await page.data.getText('processed')

  return `# ${page.data.title}
URL: ${page.url}
Source: https://raw.githubusercontent.com/blutui/dev.blutui.com/refs/heads/main/content/docs/${page.path}

${page.data.description ?? ''}

${processed}`
}
