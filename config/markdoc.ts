import { type Config, nodes, Tag } from '@markdoc/markdoc'

import { Article } from 'components/article'
import { Card } from 'components/card'
import { Fence } from 'components/fence'
import { Heading } from 'components/heading'

import { generateID } from 'utils/generate-id'

export const markdocConfig = {
  nodes: {
    document: {
      ...nodes.document,
      render: 'Article',
    },
    fence: {
      render: 'Fence',
      attributes: {
        ...nodes.fence.attributes,
        filename: { type: String, render: 'filename' },
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config)
        const children = node.children.length ? node.transformChildren(config) : [node.attributes.content]

        return new Tag(this.render?.toString(), attributes, children)
      },
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
  tags: {
    card: {
      render: 'Card',
      children: ['paragraph', 'heading', 'tag', 'list'],
      attributes: {
        title: {
          type: String,
        },
        href: {
          type: String,
        },
      },
    },
  },
} satisfies Config

export const markdocComponents = {
  Article,
  Card,
  Fence,
  Heading,
}
