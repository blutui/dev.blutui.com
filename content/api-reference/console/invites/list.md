---
title: 'List all invites'
description: 'List all invites in your agency.'
api: 'GET api.blutui.com/v1/agencies/{username}/invites'
---

{% row %}

{% column %}
### Query parameters

<Parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
</Parameter>

<Parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
</Parameter>

### Response

<Parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
</Parameter>

<Parameter name="data" type="array" %}
An array of up to `limit` invite resources. If no invites are available, an empty array is returned.
</Parameter>

<Parameter name="meta" type="object" %}
Additional information about the list.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').invites.list()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/invites' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/invite-response-list.md" /%}

{% /column %}

{% /row %}
