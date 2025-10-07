---
title: 'Remove member'
description: 'Remove a team member from your agency.'
api: 'DELETE /v1/agencies/{username}/members/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the member to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this member.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `member` for this endpoint.
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

blutui.agency('studio').members.remove('99bc147e-3ad5-4b09-a2e2-b21bd680ad05')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://api.blutui.com/v1/agencies/studio/members/99bc147e-3ad5-4b09-a2e2-b21bd680ad05' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "99bc147e-3ad5-4b09-a2e2-b21bd680ad05",
  "object": "member",
  "deleted": true
}
```

{% /column %}

{% /row %}
