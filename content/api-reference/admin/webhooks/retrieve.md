---
title: 'Retrieve webhook'
description: 'Retrieve a webhook endpoint for a project.'
api: 'GET {handle}.blutui.com/admin/api/webhooks/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the webhook endpoint to retrieve.
</Parameter>

### Response

{% partial file="api/admin/webhook-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.webhooks.get('9a228a02-305b-4bfc-8e69-e523a95c216c')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/webhooks/9a228a02-305b-4bfc-8e69-e523a95c216c' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/webhook-response.md" /%}

{% /column %}

{% /row %}
