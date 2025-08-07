---
title: 'Retrieve member'
description: 'Retrieve a team member in your agency.'
api: 'GET /v1/agencies/{username}/members/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the member to retrieve.
{% /parameter %}

### Response

{% partial file="api/console/member-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').members.get('99bc147e-3ad5-4b09-a2e2-b21bd680ad05')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/members/99bc147e-3ad5-4b09-a2e2-b21bd680ad05' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/member-response.md" /%}

{% /column %}

{% /row %}
