---
title: 'Retrieve redirect'
description: 'Retrieve a redirect for a project.'
api: 'GET {handle}.blutui.com/admin/api/redirects/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the redirect to retrieve.
</Parameter>

### Response

{% partial file="api/admin/redirect-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.redirects.get('9a5b0b29-a4f8-4df6-bf53-f282af312686')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/redirects/9a5b0b29-a4f8-4df6-bf53-f282af312686' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/redirect-response.md" /%}

{% /column %}

{% /row %}
