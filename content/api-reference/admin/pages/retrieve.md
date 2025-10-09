---
title: 'Retrieve page'
description: 'Retrieve a page for a project.'
api: 'GET {handle}.blutui.com/admin/api/pages/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the page to retrieve.
</Parameter>

### Response

{% partial file="api/admin/page-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.pages.get('99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/pages/99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/page-response.md" /%}

{% /column %}

{% /row %}
