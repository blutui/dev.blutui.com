import { Config, Schema } from '@markdoc/markdoc'
import Script from 'next/script'

export const script: Schema<Config, typeof Script> = {
  render: Script,
  attributes: {
    src: {
      type: String,
      errorLevel: 'critical',
      required: true,
    },
    strategy: {
      type: String,
      matches: ['beforeInteractive', 'afterInteractive', 'lazyOnload'],
    },
  },
}
