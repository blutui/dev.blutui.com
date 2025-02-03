---
title: 'List all redirects'
description: 'List all redirects for a project.'
api: 'GET {handle}.blutui.com/admin/api/redirects'
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

### Response

{% parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
{% /parameter %}

{% parameter name="data" type="array" %}
An array of up to `limit` redirect resources. If no redirects are available, an empty array is returned.
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

blutui.project('one').admin.redirects.list()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/redirects' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/redirect-response-list.md" /%}

{% /column %}

{% /row %}
