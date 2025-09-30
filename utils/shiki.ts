import { createHighlighter } from 'shiki'

const highlighterPromise = createHighlighter({
  langs: ['html', 'twig', 'bash'],
  langAlias: {
    canvas: 'twig',
  },
  themes: ['light-plus', 'dark-plus'],
})

export async function getHighlighter() {
  return highlighterPromise
}
