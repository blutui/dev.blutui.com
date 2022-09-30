import { Config, nodes, Schema, Tag } from '@markdoc/markdoc'

import { Code } from '../../components/Code'

export const fence: Schema<Config, typeof Code> = {
  render: Code,
  attributes: nodes.fence.attributes,
}
