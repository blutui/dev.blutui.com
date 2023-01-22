import { Config, nodes, Schema, Tag } from '@markdoc/markdoc'

import { Code } from '@/components/Code'

export const fence: Schema<Config, typeof Code> = {
  render: Code,
  attributes: {
    content: { type: String, render: false, required: true },
    language: { type: String, render: 'data-language' },
    process: { type: Boolean, render: false, default: true },
    filename: { type: String, render: 'filename' },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config)
    const children = node.children.length
      ? node.transformChildren(config)
      : [node.attributes.content]

    return new Tag(this.render?.toString(), attributes, children)
  },
}
