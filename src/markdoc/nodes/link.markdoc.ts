import { Config, Schema } from '@markdoc/markdoc'
import { AppLink } from '../../components/AppLink'

export const link: Schema<Config, typeof AppLink> = {
  render: AppLink,
  attributes: {
    href: {
      type: String,
      errorLevel: 'critical',
      required: true,
    },
    target: {
      type: String,
    },
    as: {
      type: String,
    },
    passHref: {
      type: Boolean,
      default: false,
    },
    prefetch: {
      type: Boolean,
    },
    replace: {
      type: Boolean,
      default: false,
    },
    scroll: {
      type: Boolean,
      default: true,
    },
    shallow: {
      type: Boolean,
      default: true,
    },
    locale: {
      type: Boolean,
    },
  },
}
