---
title: 'Create brand'
description: 'Create a new agency brand.'
api: 'POST api.blutui.com/v1/agencies/{username}/brand'
---

{% row %}

{% column %}
### Body parameters

<Parameter name="primary_color" type="string" required=true %}
The primary hexadecimal color of the agency brand.
</Parameter>

<Parameter name="secondary_color" type="string" required=true %}
The secondary hexadecimal color of the agency brand.
</Parameter>

<Parameter name="logo" type="string" %}
The image URL of the agency logo.
</Parameter>

### Response

{% partial file="api/console/brand-response-parameters.mdx</include>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').brand.create({
  primaryColor: '#000000',
  secondaryColor: '#222222'
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/brand' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "primary_color": "#000000",
  "secondary_color": "#222222"
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
