import { Page } from './source'

export async function getLLMText(page: Page) {
  const processed = await page.data.getText('processed')

  let method: string | null = null
  let endpoint: string | null = null
  if (page.data.api) {
    const apiMethodEndpoint = page.data.api.split(' ', 2)

    method = apiMethodEndpoint[0]
    endpoint = apiMethodEndpoint[1]
  }

  return `# ${page.data.title}
URL: ${page.url}
Source: https://raw.githubusercontent.com/blutui/dev.blutui.com/refs/heads/main/content/docs/${page.path}
${method ? `API Method: ${method}` : ''}
${endpoint ? `API Endpoint: ${endpoint}` : ''}

${page.data.description ? `> ${page.data.description}` : ''}

${processed}`
}
