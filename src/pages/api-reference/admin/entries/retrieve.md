---
title: 'Retrieve entry'
description: 'Retrieve an entry from a collection in a project.'
api: 'GET {handle}.blutui.com/admin/api/collections/{collection_id}/entries/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the collection entry to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/entry-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.entries.get('collection-id', '99e2addd-e8d2-45c3-8184-fbcae8a6cf29')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/collections/collection-id/entries/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/entry-response.md" /%}

{% /column %}

{% /row %}
