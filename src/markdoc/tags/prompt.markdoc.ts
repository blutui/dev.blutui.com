import { Config, Schema } from '@markdoc/markdoc'
import { Prompt } from '@/components/prompt'

export const prompt: Schema<Config, typeof Prompt> = {
  render: Prompt,
  children: ['text'],
}
