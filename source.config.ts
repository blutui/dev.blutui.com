import { defineDocs, defineConfig } from 'fumadocs-mdx/config'

export const docs = defineDocs({
  dir: 'content/docs',
})

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      langs: ['html', 'twig', 'bash'],
      langAlias: {
        canvas: 'twig',
      },
      themes: {
        light: 'light-plus',
        dark: 'dark-plus',
      },
    },
  },
})
