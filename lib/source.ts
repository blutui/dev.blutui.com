import { type InferMetaType, type InferPageType, loader } from 'fumadocs-core/source'
import { docs } from '.source'

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
