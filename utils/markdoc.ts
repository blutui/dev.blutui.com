import { readdir, readFile } from 'fs/promises'
import path from 'path'

import React from 'react'
import yaml from 'js-yaml'
import Markdoc, { Node } from '@markdoc/markdoc'

import { markdocComponents, markdocConfig } from 'config/markdoc'

/**
 * Load all the partials from the `partials` content directory.
 */
export async function loadPartials(): Promise<Record<string, Node>> {
  const partialsDir = path.join(process.cwd(), 'content', 'partials')
  const entries = await readdir(partialsDir)

  const partials: Record<string, Node> = {}
  for (const entry of entries) {
    if (entry.endsWith('.md')) {
      const key = entry
      const fullPath = path.join(partialsDir, entry)
      const content = await readFile(fullPath, 'utf-8')
      partials[key] = Markdoc.parse(content)
    }
  }

  return partials
}

/**
 * Load the given page from the `docs` content directory.
 */
export async function loadDocumentationContent(
  page: string
): Promise<{ content: React.ReactNode; frontmatter: Record<string, unknown> }> {
  const filePath = path.join(process.cwd(), 'content', 'docs', `${page}.md`)

  let source: string
  try {
    source = await readFile(filePath, 'utf-8')
  } catch (e) {
    throw e
  }

  const partials = await loadPartials()

  const ast = Markdoc.parse(source)
  const frontmatter = ast.attributes.frontmatter
    ? (yaml.load(ast.attributes.frontmatter) as Record<string, unknown>)
    : {}
  const content = Markdoc.transform(ast, {
    ...markdocConfig,
    variables: {
      frontmatter,
    },
    partials,
  })
  const renderedContent = Markdoc.renderers.react(content, React, { components: markdocComponents })

  return {
    content: renderedContent,
    frontmatter,
  }
}
