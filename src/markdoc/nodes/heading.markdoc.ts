import { Tag, Config, Schema } from '@markdoc/markdoc'
import { Heading } from '@/components/heading'
import { generateID } from '@/utils/generate-id'

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
