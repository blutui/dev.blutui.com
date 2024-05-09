import { Parameter } from '@/components/parameter'
import { Config, Schema } from '@markdoc/markdoc'

export const parameter: Schema<Config, typeof Parameter> = {
  render: Parameter,
  attributes: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
