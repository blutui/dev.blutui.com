---
title: 'Update invite'
description: "Update a team member's invite in your agency."
api: 'PATCH api.blutui.com/v1/agencies/{username}/invites/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the invite to update.
</Parameter>

### Body parameters

<Parameter name="role" type="integer" %}
The ID of the role this invited team member will be apart of.
</Parameter>

### Response

{% partial file="api/console/invite-response-parameters.mdx</include>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').invites.update('9dc1b356-6397-41d6-a177-bf88113d2084', {
  role: 2
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/invites/9dc1b356-6397-41d6-a177-bf88113d2084' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "role": 2
}'
```

{% /code-group %}

{% partial file="api/console/invite-response.mdx</include>

{% /column %}

{% /row %}
