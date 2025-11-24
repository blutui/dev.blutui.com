import fs from 'node:fs'
import { defineDocs, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'
import lastModified from 'fumadocs-mdx/plugins/last-modified'
import jsonSchema from 'fumadocs-mdx/plugins/json-schema'

export const docs = defineDocs({
  dir: 'content',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend({
      api: z.optional(z.string()),
    }),
    async: true,
  },
})

const canvas = JSON.parse(fs.readFileSync('./lib/canvas.grammar.json', 'utf-8'))

export default defineConfig({
  plugins: [jsonSchema({ insert: true }), lastModified()],
  mdxOptions: async () => {
    const { remarkSteps } = await import('fumadocs-core/mdx-plugins/remark-steps')

    return {
      rehypeCodeOptions: {
        lazy: true,
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
    }
  },
})
