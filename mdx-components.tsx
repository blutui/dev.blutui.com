import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import * as icons from 'lucide-react'
import * as StepsComponents from 'fumadocs-ui/components/steps'

import * as BadgeComponents from 'components/badge'
import * as ChangelogComponents from 'components/changelog'
import * as ParameterComponents from 'components/parameter'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...BadgeComponents,
    ...ChangelogComponents,
    ...ParameterComponents,
    ...StepsComponents,
    ...components,
  }
}
