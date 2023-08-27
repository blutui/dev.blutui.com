import { Config, nodes, Schema } from '@markdoc/markdoc'
import { AppImage } from '@/components/app-image'

export const image: Schema<Config, typeof AppImage> = {
  render: AppImage,
  attributes: nodes.image.attributes,
}
