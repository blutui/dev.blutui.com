import { Config, Schema } from '@markdoc/markdoc'
import { Card } from '@/components/card'

export const card: Schema<Config, typeof Card> = {
  render: Card,
  children: ['paragraph', 'heading', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    href: {
      type: String,
    },
  },
}
