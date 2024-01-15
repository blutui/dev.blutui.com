import { Config, nodes, Schema } from '@markdoc/markdoc'
import { Article } from '@/components/article'

export const document: Schema<Config, typeof Article> = {
  ...nodes.document,
  render: Article,
}
