import fs from 'node:fs'
import { defineDocs, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config'
import { remarkSteps } from 'fumadocs-core/mdx-plugins'
import { z } from 'zod'

export const docs = defineDocs({
  dir: 'content',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend({
      api: z.optional(z.string()),
    }),
  },
})

const canvas = JSON.parse(fs.readFileSync('./lib/canvas.grammar.json', 'utf-8'))

export default defineConfig({
  lastModifiedTime: 'git',
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
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    remarkNpmOptions: {
      persist: {
        id: 'package-manager',
      },
    },
    remarkPlugins: [remarkSteps],
  },
})
