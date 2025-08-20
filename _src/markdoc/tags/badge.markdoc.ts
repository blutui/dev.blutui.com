import { Config, Schema } from '@markdoc/markdoc'
import { Badge } from '@/components/badge'

export const badge: Schema<Config, typeof Badge> = {
  render: Badge,
  children: ['text'],
  attributes: {
    status: {
      type: String,
      default: 'default',
      matches: [
        'default',
        'info',
        'success',
        'attention',
        'warning',
        'critical',
      ],
      errorLevel: 'critical',
    },
  },
}
