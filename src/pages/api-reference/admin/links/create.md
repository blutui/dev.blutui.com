---
title: 'Create link'
description: 'Create a link to another collection in a project.'
api: 'POST {handle}.blutui.com/admin/api/collections/{collection_id}/links'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="to" type="string" required="true" %}
The ID of the collection that is linked to.
{% /parameter %}

{% parameter name="type" type="string" required="true" %}
The type of collection link.
{% /parameter %}

{% parameter name="through_field" type="string" required="true" %}
The `name` of the collection field the link is through.
{% /parameter %}

{% parameter name="foreign_key" type="string" required="true" %}
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

blutui.project('one').admin.links.create('collection-id', {
  to: '0195b544-bc46-7223-851d-3ce553b11ae6',
  type: 'hasMany',
  through_field: 'title',
  foreign_key: 'collection'
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/collections/collection-id/links' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "to": "0195b544-bc46-7223-851d-3ce553b11ae6",
  "type": "hasMany",
  "through_field": "title",
  "foreign_key": "collection"
}'
```

{% /code-group %}

{% partial file="api/admin/link-response.md" /%}

{% /column %}

{% /row %}
