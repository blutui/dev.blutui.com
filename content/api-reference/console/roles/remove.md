---
title: 'Remove role'
description: 'Remove a role in your agency.'
api: 'DELETE /v1/agencies/{username}/roles/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the role to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this role.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `role` for this endpoint.
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

blutui.agency('studio').roles.remove(2)
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://api.blutui.com/v1/agencies/studio/roles/2' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": 2,
  "object": "role",
  "deleted": true
}
```

{% /column %}

{% /row %}
