---
title: 'Create entry'
description: 'Create an entry for a collection in a project.'
api: 'POST {handle}.blutui.com/admin/api/collections/{collection_id}/entries'
---

{% row %}

{% column %}
### Body parameters

<Parameter name="*" type="any" required="true" %}
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

blutui.project('one').admin.entries.create('collection-id', {
  title: 'Black Chair',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/collections/collection-id/entries' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "title": "Black Chair"
}'
```

{% /code-group %}

{% partial file="api/admin/entry-response.md" /%}

{% /column %}

{% /row %}
