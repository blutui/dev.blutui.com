import { Config, Schema } from '@markdoc/markdoc'
import { Changelog } from '@/components/Changelog'

export const changelog: Schema<Config, typeof Changelog> = {
  render: Changelog,
  children: ['paragraph', 'heading', 'tag', 'list'],
  attributes: {
    date: {
      type: String,
      required: true,
    },
  },
}
