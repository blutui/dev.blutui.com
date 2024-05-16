import { Config, Schema } from '@markdoc/markdoc'
import { CodeGroup } from '@/components/code-group'

export const codeGroup: Schema<Config, typeof CodeGroup> = {
  render: CodeGroup,
  children: ['fence'],
}
