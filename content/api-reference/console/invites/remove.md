---
title: 'Remove invite'
description: "Remove a team member's invite from your agency."
api: 'DELETE api.blutui.com/v1/agencies/{username}/invites/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the invite to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this invite.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `invite` for this endpoint.
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

blutui.agency('studio').invites.remove('9dc1b356-6397-41d6-a177-bf88113d2084')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://api.blutui.com/v1/agencies/studio/invites/9dc1b356-6397-41d6-a177-bf88113d2084' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9dc1b356-6397-41d6-a177-bf88113d2084",
  "object": "invite",
  "deleted": true
}
```

{% /column %}

{% /row %}
