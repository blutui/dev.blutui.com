---
title: 'Update webhook'
description: 'Update a webhook endpoint in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/webhooks/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the webhook endpoint to update.
{% /parameter %}

### Body parameters

{% parameter name="url" type="string" %}
The webhook endpoint to receive events.
{% /parameter %}

{% parameter name="events" type="array" %}
The list of events to send to the webhook endpoint.
{% /parameter %}

{% parameter name="events.*" type="string" %}
The webhook event.
{% /parameter %}

{% parameter name="disabled" type="boolean" %}
Whether the webhook endpoint is disabled or not.
{% /parameter %}

### Response

{% partial file="api/admin/webhook-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.webhooks.update('9a228a02-305b-4bfc-8e69-e523a95c216c', {
  events: ['form.submission.created'],
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/webhooks/9a228a02-305b-4bfc-8e69-e523a95c216c' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "events": ["form.submission.created"]
}'
```

{% /code-group %}

{% partial file="api/admin/webhook-response.md" /%}

{% /column %}

{% /row %}
