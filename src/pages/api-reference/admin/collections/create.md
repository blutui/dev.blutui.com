---
title: 'Create collection'
description: 'Create a collection in a project.'
api: 'POST {handle}.blutui.com/admin/api/collections'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" required=true %}
The name of the collection.
{% /parameter %}

{% parameter name="handle" type="string" required=true %}
The unique handle for this collection.
{% /parameter %}

### Response

{% partial file="api/admin/collection-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.collections.create({
  name: 'Products',
  handle: 'products',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/collections' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Products",
  "handle": "products"
}'
```

{% /code-group %}

{% partial file="api/admin/collection-response.md" /%}

{% /column %}

{% /row %}
