import { Config, Schema } from '@markdoc/markdoc'
import { Row } from '@/components/row'

export const row: Schema<Config, typeof Row> = {
  render: Row,
}
