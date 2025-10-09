---
title: 'Create webhook'
description: 'Create a webhook endpoint in a project.'
api: 'POST {handle}.blutui.com/admin/api/webhooks'
---

{% row %}

{% column %}
### Body parameters

<Parameter name="url" type="string" required=true %}
The webhook endpoint to receive events.
</Parameter>

<Parameter name="events" type="array" required=true %}
The list of events to send to the webhook endpoint.
</Parameter>

<Parameter name="events.*" type="string" %}
The webhook event.
</Parameter>

### Response

{% partial file="api/admin/webhook-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.webhooks.create({
  url: 'https://webhook.endpoint.test/123456',
  events: ['form.submission.created'],
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/webhooks' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "url": "https://webhook.endpoint.test/123456",
  "events": ["form.submission.created"]
}'
```

{% /code-group %}

{% partial file="api/admin/webhook-response.md" /%}

{% /column %}

{% /row %}
