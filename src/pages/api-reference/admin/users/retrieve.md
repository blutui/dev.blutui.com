---
title: 'Retrieve user'
description: 'Retrieve a user for a project.'
api: 'GET {handle}.blutui.com/admin/api/users/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the user to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/user-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.users.get('9a1aa882-849c-43d1-bb32-dcefb907cf4e')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/users/9a1aa882-849c-43d1-bb32-dcefb907cf4e' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/user-response.md" /%}

{% /column %}

{% /row %}
