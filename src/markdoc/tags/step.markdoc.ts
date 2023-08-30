import { Config, Schema } from '@markdoc/markdoc'
import { Step } from '@/components/step'

export const step: Schema<Config, typeof Step> = {
  render: Step,
  children: ['paragraph', 'heading', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
}
