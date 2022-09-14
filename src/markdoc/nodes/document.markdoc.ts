import { Config, nodes, Schema, Tag } from '@markdoc/markdoc'
import { Article } from '../../components/Article'

export const document: Schema<Config, typeof Article> = {
  ...nodes.document,
  render: Article,
}
