---
title: 'Retrieve brand'
description: 'Retrieve the current agency brand.'
api: 'GET /v1/agencies/{username}/brand'
---

{% row %}

{% column %}
### Response

{% callout type="note" %}
If an agency brand doesn't exist a `204` `No Content` response is returned.
{% /callout %}

{% partial file="api/console/brand-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').brand.get()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/brand' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9bfdb42b-1bf0-4510-978e-46aa329f8efa",
  "object": "brand",
  "primary_color": "#6227FF",
  "secondary_color": "#333333",
  "created_at": 1690330767,
  "updated_at": 1703633941
}
```

{% /column %}

{% /row %}
