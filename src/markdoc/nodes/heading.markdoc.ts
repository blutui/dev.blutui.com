import { Tag, Config, Schema, RenderableTreeNode } from '@markdoc/markdoc'
import { Heading } from '../../components/Heading'

function generateID(
  children: RenderableTreeNode[],
  attributes: Record<string, any>
): string {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id
  }

  return children
    .filter((child: any) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .toLowerCase()
}

export const heading: Schema<Config, typeof Heading> = {
  render: Heading,
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
}
