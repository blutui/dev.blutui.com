import { type Config, nodes, Tag } from '@markdoc/markdoc'

import { Article } from 'components/article'
import { Heading } from 'components/heading'

import { generateID } from 'utils/generate-id'

export const markdocConfig = {
  nodes: {
    document: {
      ...nodes.document,
      render: 'Article',
    },
    heading: {
      render: 'Heading',
      children: ['inline'],
      attributes: {
        id: { type: String },
        level: { type: Number, required: true, default: 1 },
        className: { type: String },
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config)
        const children = node.transformChildren(config)
        const id = generateID(children, attributes)

        return new Tag(this.render?.toString(), { ...attributes, id }, children)
      },
    },
  },
} satisfies Config

export const markdocComponents = {
  Article,
  Heading,
}
