import { Config, nodes, Schema } from '@markdoc/markdoc'
import { AppImage } from '@/components/AppImage'

export const image: Schema<Config, typeof AppImage> = {
  render: AppImage,
  attributes: nodes.image.attributes,
}
