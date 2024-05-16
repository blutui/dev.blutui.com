---
title: 'Update brand'
description: 'Update the current agency brand.'
api: 'PATCH /v1/agencies/{username}/brand'
---

{% row %}

{% column %}
### Request parameters

{% parameter name="logo" type="string" %}
The image URL of the agency logo.
{% /parameter %}

{% parameter name="primary_color" type="string" %}
The primary hexadecimal color of the agency brand.
{% /parameter %}

{% parameter name="secondary_color" type="string" %}
The secondary hexadecimal color of the agency brand.
{% /parameter %}

### Response

{% partial file="api/console/brand-response.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').brand.update({
  logo: 'https://cdn.blutui.com/uploads/assets/logo/youragency.svg'
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/brand' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "logo": "https://cdn.blutui.com/uploads/assets/logo/youragency.svg"
}'
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
