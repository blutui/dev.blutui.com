---
title: 'Update domain'
description: 'Update a domain in your agency.'
api: 'PATCH api.blutui.com/v1/agencies/{username}/domains/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the domain to update.
</Parameter>

### Body parameters

<Parameter name="project" type="string | null" required="true" %}
The ID of the project this domain will belong to.
</Parameter>

### Response

{% partial file="api/console/domain-response-parameters.mdx</include>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').domains.update('9c17d680-e0af-4f00-9e28-08c4e38e89e0', {
  project: '9c17d63b-96c0-4315-b4dd-e55373ce4ffd'
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/domains/9c17d680-e0af-4f00-9e28-08c4e38e89e0' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "project": "9c17d63b-96c0-4315-b4dd-e55373ce4ffd"
}'
```

{% /code-group %}

{% partial file="api/console/domain-response.mdx</include>

{% /column %}

{% /row %}
