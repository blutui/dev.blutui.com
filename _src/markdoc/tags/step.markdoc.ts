import { Config, Schema, Tag } from '@markdoc/markdoc'
import { Step } from '@/components/step'
import { generateID } from '@/utils/generate-id'

export const step: Schema<Config, typeof Step> = {
  render: Step,
  children: ['paragraph', 'heading', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)
    const id = generateID([attributes.title], {})

    return new Tag(this.render?.toString(), { ...attributes, id }, children)
  },
}
