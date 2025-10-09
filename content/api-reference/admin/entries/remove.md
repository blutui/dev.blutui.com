---
title: 'Remove entry'
description: 'Remove an entry from a collection in a project.'
api: 'DELETE {handle}.blutui.com/admin/api/collections/{collection_id}/entries/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the collection entry to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this collection entry.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `collection_entry` for this endpoint.
</Parameter>

<Parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.entries.remove('collection-id', '0195b59f-2876-726e-9561-e692240c4d2d')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/collections/collection-id/entries/0195b59f-2876-726e-9561-e692240c4d2d' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "0195b59f-2876-726e-9561-e692240c4d2d",
  "object": "entry",
  "deleted": true
}
```

{% /column %}

{% /row %}
