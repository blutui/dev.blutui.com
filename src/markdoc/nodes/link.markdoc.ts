import { Config, nodes, Schema } from '@markdoc/markdoc'
import { AppLink } from '../../components/AppLink'

export const link: Schema<Config, typeof AppLink> = {
  ...nodes.link,
  render: AppLink,
}
