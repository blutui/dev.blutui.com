---
title: 'Search domains'
description: 'Search for domains in your agency.'
api: 'POST /v1/agencies/{username}/domains/search'
---

{% row %}

{% column %}
### Request parameters

{% parameter name="name" type="string" required=true %}
The name of the domain to search for.
{% /parameter %}

### Response

{% parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
{% /parameter %}

{% parameter name="data" type="array" %}
An array of up to `limit` domain resources. If no domains are available, an empty array is returned.
{% /parameter %}

{% parameter name="meta" type="object" %}
Additional information about the list.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').domains.search({
  name: 'example.com'
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/domains/search' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "example.com"
}'
```

{% /code-group %}

{% partial file="api/console/domain-response-list.md" /%}

{% /column %}

{% /row %}
