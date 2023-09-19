import { Config, Schema } from '@markdoc/markdoc'
import { Steps } from '@/components/steps'

export const steps: Schema<Config, typeof Steps> = {
  render: Steps,
  inline: false,
  children: ['step'],
  attributes: {},
  validate(node, config) {
    if (node.children.length !== 1) {
      return [
        {
          id: 'provider-children',
          level: 'critical',
          message: 'Providers must only have one child.',
        },
      ]
    }
    return []
  },
}
