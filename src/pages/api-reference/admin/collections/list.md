---
title: 'List all collections'
description: 'List all collections for a project.'
api: 'GET {handle}.blutui.com/admin/api/collections'
---

{% row %}

{% column %}
### Query parameters

{% parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
{% /parameter %}

{% parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
{% /parameter %}

{% parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `list`.
{% /parameter %}

### Response

{% parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
{% /parameter %}

{% parameter name="data" type="array" %}
An array of up to `limit` collection resources. If no collections are available, an empty array is returned.
{% /parameter %}

{% parameter name="meta" type="object" %}
Additional information about the list.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.collections.list()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/collections' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/collection-response-list.md" /%}

{% /column %}

{% /row %}
