---
title: 'Remove form'
description: 'Remove a form from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/forms/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the form to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this form.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `form` for this endpoint.
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

blutui.project('one').admin.forms.remove('0195b657-82dd-718a-8092-9ea39771ec83')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/forms/0195b657-82dd-718a-8092-9ea39771ec83' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "0195b657-82dd-718a-8092-9ea39771ec83",
  "object": "form",
  "deleted": true
}
```

{% /column %}

{% /row %}
