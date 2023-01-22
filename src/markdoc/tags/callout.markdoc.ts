import { Config, Schema } from '@markdoc/markdoc'
import { Callout } from '@/components/Callout'

export const callout: Schema<Config, typeof Callout> = {
  render: Callout,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: 'note',
      matches: ['caution', 'check', 'note', 'warning'],
      errorLevel: 'critical',
    },
    title: {
      type: String,
    },
  },
}
