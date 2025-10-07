import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import * as icons from 'lucide-react'
import * as StepsComponents from 'fumadocs-ui/components/steps'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...StepsComponents,
    ...components,
  }
}
