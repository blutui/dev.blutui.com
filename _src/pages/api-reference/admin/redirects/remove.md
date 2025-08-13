---
title: 'Remove redirect'
description: 'Remove a redirect for a project.'
api: 'DELETE {handle}.blutui.com/admin/api/redirects/{id}'
---

{% row %}

{% column %}

### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the redirect to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this redirect.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `redirect` for this endpoint.
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

blutui
  .project('one')
  .admin.redirects.remove('9a5b0b29-a4f8-4df6-bf53-f282af312686')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/redirects/9a5b0b29-a4f8-4df6-bf53-f282af312686' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9a5b0b29-a4f8-4df6-bf53-f282af312686",
  "object": "redirect",
  "deleted": true
}
```

{% /column %}

{% /row %}
