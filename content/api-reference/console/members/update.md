---
title: 'Update member'
description: 'Update a team member in your agency.'
api: 'PATCH /v1/agencies/{username}/members/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the member to update.
{% /parameter %}

### Body parameters

{% parameter name="role" type="integer" %}
The ID of the role this member will be apart of.
{% /parameter %}

{% parameter name="has_full_access" type="boolean" %}
Determine if the team member should have full access to the agency.
{% /parameter %}

### Response

{% partial file="api/console/member-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').members.update('99bc147e-3ad5-4b09-a2e2-b21bd680ad05', {
  hasFullAccess: true
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/members/99bc147e-3ad5-4b09-a2e2-b21bd680ad05' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "has_full_access": true
}'
```

{% /code-group %}

{% partial file="api/console/member-response.md" /%}

{% /column %}

{% /row %}
