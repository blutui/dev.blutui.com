import { Config, Schema } from '@markdoc/markdoc'
import { Column } from '@/components/column'

export const column: Schema<Config, typeof Column> = {
  render: Column,
  attributes: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
}
