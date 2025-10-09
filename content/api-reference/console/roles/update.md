---
title: 'Update role'
description: 'Update a role in your agency.'
api: 'PATCH api.blutui.com/v1/agencies/{username}/roles/{id}'
---

{% row %}

{% column %}
### Body parameters

<Parameter name="name" type="string" required=true %}
The unique name of the role.
</Parameter>

<Parameter name="description" type="string | null" %}
The description of the role.
</Parameter>

<Parameter name="permissions" type="array" %}
The list of permissions for the role.
</Parameter>

### Response

{% partial file="api/console/role-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').roles.update(2, {
  description: 'The frontend developer role.',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/roles/2' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "description": "The frontend developer role."
}'
```

{% /code-group %}

{% partial file="api/console/role-response.md" /%}

{% /column %}

{% /row %}
