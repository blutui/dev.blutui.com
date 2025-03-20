---
title: 'Remove collection'
description: 'Remove a collection from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/collections/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the collection to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this collection.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `collection` for this endpoint.
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

blutui.project('one').admin.collections.remove('0195b544-bc46-7223-851d-3ce553b11ae6')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/collections/0195b544-bc46-7223-851d-3ce553b11ae6' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "0195b544-bc46-7223-851d-3ce553b11ae6",
  "object": "collection",
  "deleted": true
}
```

{% /column %}

{% /row %}
