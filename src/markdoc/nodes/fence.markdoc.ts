import { Config, nodes, Schema, Tag } from '@markdoc/markdoc'

import { Code } from '../../components/Code'

export const fence: Schema<Config, typeof Code> = {
  render: Code,
  attributes: nodes.fence.attributes,
  transform(node, config) {
    const attributes = node.transformAttributes(config)
    const children = node.children.length
      ? node.transformChildren(config)
      : [node.attributes.content]

    return new Tag(this.render?.toString(), attributes, children)
  },
}
