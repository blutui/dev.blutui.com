---
title: 'Add domain'
description: 'Add a domain to your agency.'
api: 'POST /v1/agencies/{username}/domains'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" required=true %}
The name of the domain.
{% /parameter %}

{% parameter name="project" type="string | null" %}
The ID of the project this domain will belong to.
{% /parameter %}

### Response

{% partial file="api/console/domain-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').domains.create({
  name: 'example.com',
  project: '9c17d63b-96c0-4315-b4dd-e55373ce4ffd'
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/domains' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "example.com",
  "project": "9c17d63b-96c0-4315-b4dd-e55373ce4ffd"
}'
```

{% /code-group %}

{% partial file="api/console/domain-response.md" /%}

{% /column %}

{% /row %}
