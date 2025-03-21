---
title: 'Remove link'
description: 'Remove a link from a collection in a project.'
api: 'DELETE {handle}.blutui.com/admin/api/collections/{collection_id}/links/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the collection link to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this collection link.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `collection_link` for this endpoint.
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

blutui.project('one').admin.links.remove('collection-id', '0195b611-161e-733c-9372-72985cffa043')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/collection/collection-id/links/0195b611-161e-733c-9372-72985cffa043' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "0195b611-161e-733c-9372-72985cffa043",
  "object": "link",
  "deleted": true
}
```

{% /column %}

{% /row %}
