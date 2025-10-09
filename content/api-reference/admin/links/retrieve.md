---
title: 'Retrieve link'
description: 'Retrieve a link for a collection in a project.'
api: 'GET {handle}.blutui.com/admin/api/collections/{collection_id}/links/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the link to retrieve.
</Parameter>

### Response

{% partial file="api/admin/link-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.links.get('collection-id', '99e2addd-e8d2-45c3-8184-fbcae8a6cf29')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/collections/collections-id/links/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/link-response.md" /%}

{% /column %}

{% /row %}
