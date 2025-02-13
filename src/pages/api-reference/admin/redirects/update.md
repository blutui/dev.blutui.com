---
title: 'Update redirect'
description: 'Update a redirect in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/redirects/{id}'
---

{% row %}

{% column %}

### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the redirect to update.
{% /parameter %}

### Body parameters

{% parameter name="from" type="string" %}
The from url of the redirect.
{% /parameter %}

{% parameter name="to" type="array" %}
The to url of the redirect.
{% /parameter %}

### Response

{% partial file="api/admin/redirect-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui
  .project('one')
  .admin.redirects.update('9a5b0b29-a4f8-4df6-bf53-f282af312686', {
    from: '/updated',
  })
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/redirects/9a5b0b29-a4f8-4df6-bf53-f282af312686' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "from": "/updated"
}'
```

{% /code-group %}

{% partial file="api/admin/redirect-response.md" /%}

{% /column %}

{% /row %}
