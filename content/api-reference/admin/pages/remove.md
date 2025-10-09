---
title: 'Remove page'
description: 'Remove a page from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/pages/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the page to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this page.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `page` for this endpoint.
</Parameter>

<Parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.pages.remove('99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/pages/99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf",
  "object": "page",
  "deleted": true
}
```

{% /column %}

{% /row %}
