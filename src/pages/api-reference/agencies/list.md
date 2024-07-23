---
title: 'List all agencies'
description: 'List all agencies for the currently authenticated user.'
api: 'GET /v1/agencies'
---

{% row %}

{% column %}
### Query parameters

{% parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
{% /parameter %}

{% parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
{% /parameter %}

### Response

{% parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
{% /parameter %}

{% parameter name="data" type="array" %}
An array of up to `limit` agency resources. If no agencies are available, an empty array is returned.
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

blutui.agencies.list()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/agency-response-list.md" /%}

{% /column %}

{% /row %}
