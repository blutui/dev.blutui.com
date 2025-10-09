---
title: 'Create role'
description: 'Create a role to your agency.'
api: 'POST api.blutui.com/v1/agencies/{username}/roles'
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

blutui.agency('studio').roles.create({
  name: 'Developer',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/roles' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Developer"
}'
```

{% /code-group %}

{% partial file="api/console/role-response.md" /%}

{% /column %}

{% /row %}
