---
title: 'Update collection'
description: 'Update a collection in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/collections/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the collection to update.
{% /parameter %}

### Body parameters

{% parameter name="name" type="string" %}
The name of this collection.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique handle for this collection.
{% /parameter %}

{% parameter name="fields" type="array" %}
The list of fields for this collection.
{% /parameter %}

{% parameter name="fields.*.name" type="string" required="true" %}
The name of the collection field.
{% /parameter %}

{% parameter name="fields.*.label" type="string" required="true" %}
The user friendly label of the collection field.
{% /parameter %}

{% parameter name="fields.*.type" type="string" required="true" %}
The type of the collection field.
{% /parameter %}

{% parameter name="fields.*.default_value" type="string | null" %}
The default value of the collection field.
{% /parameter %}

{% parameter name="fields.*.help_text" type="string | null" %}
The description of what the collection field is for.
{% /parameter %}

{% parameter name="fields.*.required" type="boolean" %}
Whether the collection field is required or not.
{% /parameter %}

{% parameter name="fields.*.order" type="number" %}
The order of the collection field.
{% /parameter %}

{% parameter name="links" type="array" %}
The list of links for this collection.
{% /parameter %}

{% parameter name="parent_links" type="array" %}
The list of parent links for this collection.
{% /parameter %}

### Response

{% partial file="api/admin/collection-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.collections.update('0195b544-bc46-7223-851d-3ce553b11ae6', {
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true,
    }
  ],
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/collections/0195b544-bc46-7223-851d-3ce553b11ae6' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "fields": [
    {
      "label": "Title",
      "name": "title",
      "type": "text",
      "required": true,
    }
  ]
}'
```

{% /code-group %}

{% partial file="api/admin/collection-response.md" /%}

{% /column %}

{% /row %}
