import { NextPageContext } from 'next'

const schema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema#',
  title: 'Configuration',
  description:
    'The configuration that is contained inside the file `courier.json`',
  type: 'object',
  properties: {
    $schema: {
      description:
        'A field for the [JSON schema](https://json-schema.org) specification',
      type: ['string', 'null'],
    },
    api: {
      description: 'The API URL used to update this project',
      type: ['string', 'null'],
    },
    handle: {
      description: 'The handle for this project',
      type: ['string', 'null'],
    },
    site: {
      description: 'The subdomain of this project',
      type: ['string', 'null'],
    },
    template: {
      description: 'The template handle for this template',
      type: ['string', 'null'],
    },
  },
  additionalProperties: false,
  required: ['handle', 'template'],
}

Schema.getInitialProps = (context: NextPageContext) => {
  const res = context.res

  res?.setHeader('Content-Type', 'application/json; charset=utf-8')
  res?.write(JSON.stringify(schema))
  res?.end()

  return {}
}

export default function Schema() {
  return <></>
}
