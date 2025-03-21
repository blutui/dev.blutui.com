---
title: 'Update link'
description: 'Update a link for a collection in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/collections/{collection_id}/links/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the collection link to update.
{% /parameter %}

### Body parameters

{% parameter name="to" type="string" %}
The ID of the collection that is linked to.
{% /parameter %}

{% parameter name="type" type="string" %}
The type of collection link.
{% /parameter %}

{% parameter name="through_field" type="string" %}
The `name` of the collection field the link is through.
{% /parameter %}

{% parameter name="foreign_key" type="string" %}
The `name` of the foreign key on the collection that is linked to.
{% /parameter %}

### Response

{% partial file="api/admin/link-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.links.update('collection-id', '99e2addd-e8d2-45c3-8184-fbcae8a6cf29', {
  to: '0195b544-bc46-7223-851d-3ce553b11ae6',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/collections/collection-id/links/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "to": "0195b544-bc46-7223-851d-3ce553b11ae6"
}'
```

{% /code-group %}

{% partial file="api/admin/link-response.md" /%}

{% /column %}

{% /row %}
