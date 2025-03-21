---
title: 'Remove webhook'
description: 'Remove a webhook endpoint from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/webhooks/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the webhook endpoint to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this webhook.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `webhook` for this endpoint.
{% /parameter %}

{% parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.webhooks.remove('9a228a02-305b-4bfc-8e69-e523a95c216c')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/webhooks/9a228a02-305b-4bfc-8e69-e523a95c216c' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9a228a02-305b-4bfc-8e69-e523a95c216c",
  "object": "webhook",
  "deleted": true
}
```

{% /column %}

{% /row %}
