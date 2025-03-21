---
title: 'Retrieve collection'
description: 'Retrieve a collection for a project.'
api: 'GET {handle}.blutui.com/admin/api/collections/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the collection to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/collection-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.collections.get('0195b544-bc46-7223-851d-3ce553b11ae6')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/collections/0195b544-bc46-7223-851d-3ce553b11ae6' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/collection-response.md" /%}

{% /column %}

{% /row %}
