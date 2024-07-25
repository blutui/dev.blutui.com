---
title: 'Retrieve role'
description: 'Retrieve a role in your agency.'
api: 'GET /v1/agencies/{username}/roles/{id}'
---

{% row %}

{% column %}
### Response

{% partial file="api/console/role-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').roles.get(2)
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
