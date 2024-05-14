---
title: 'Retrieve brand'
description: 'Retrieve the current agency brand.'
api: 'GET /v1/agencies/{username}/brand'
---

{% row %}

{% column %}
### Response

{% parameter name="id" type="string" %}
The unique identifier for this brand.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `brand` for this endpoint.
{% /parameter %}

{% parameter name="logo" type="string" %}
The image URL of the agency logo.
{% /parameter %}

{% parameter name="primary_color" type="string" %}
The primary hexadecimal color of the agency brand.
{% /parameter %}

{% parameter name="secondary_color" type="string" %}
The secondary hexadecimal color of the agency brand.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The brand's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The brand's updated at timestamp.
{% /parameter %}

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
