---
title: 'Remove user'
description: 'Remove a user from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/users/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the user to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this user.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `project_user` for this endpoint.
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

blutui.project('one').admin.users.remove('9a1aa882-849c-43d1-bb32-dcefb907cf4e')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/users/9a1aa882-849c-43d1-bb32-dcefb907cf4e' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9a1aa882-849c-43d1-bb32-dcefb907cf4e",
  "object": "project_user",
  "deleted": true
}
```

{% /column %}

{% /row %}
