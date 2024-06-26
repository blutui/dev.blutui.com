---
title: 'Remove brand'
description: 'Remove the current agency brand.'
api: 'DELETE /v1/agencies/{username}/brand'
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

{% parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').brand.remove()
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://api.blutui.com/v1/agencies/studio/brand' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
  "object": "brand",
  "deleted": true
}
```

{% /column %}

{% /row %}
