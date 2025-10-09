---
title: 'Update entry'
description: 'Update an entry for a collection in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/collections/{collection_id}/entries/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the collection entry to update.
</Parameter>

### Body parameters

<Parameter name="*" type="any" %}
The key/value pair of a collection field.
</Parameter>

### Response

{% partial file="api/admin/entry-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.entries.update('collection-id', '99e2addd-e8d2-45c3-8184-fbcae8a6cf29', {
  title: 'Black Chair',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/collections/collection-id/entries/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Black Chair"
}'
```

{% /code-group %}

{% partial file="api/admin/entry-response.md" /%}

{% /column %}

{% /row %}
