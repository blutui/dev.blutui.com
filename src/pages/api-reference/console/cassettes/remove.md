---
title: 'Remove Cassette'
description: 'Remove a Cassette from a project your agency.'
api: 'DELETE /v1/agencies/{username}/cassettes/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the Cassette to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this Cassette.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `cassette` for this endpoint.
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

blutui.agency('studio').cassettes.remove('9d759f5a-7a1f-443e-a466-6471da1d367b')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://api.blutui.com/v1/agencies/studio/cassettes/9d759f5a-7a1f-443e-a466-6471da1d367b' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9d759f5a-7a1f-443e-a466-6471da1d367b",
  "object": "cassette",
  "deleted": true
}
```

{% /column %}

{% /row %}
