import fs from 'node:fs'
import { defineDocs, defineConfig } from 'fumadocs-mdx/config'
import { remarkSteps } from 'fumadocs-core/mdx-plugins'

export const docs = defineDocs({
  dir: 'content/docs',
})

const canvas = JSON.parse(fs.readFileSync('./lib/canvas.grammar.json', 'utf-8'))

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      experimentalJSEngine: true,
      langs: ['html', canvas, 'bash'],
      themes: {
        light: 'light-plus',
        dark: 'dark-plus',
      },
    },
    recmaPlugins: [remarkSteps],
  },
})
