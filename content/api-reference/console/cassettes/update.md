---
title: 'Update Cassette'
description: 'Update a Cassette for a project your agency.'
api: 'PATCH api.blutui.com/v1/agencies/{username}/cassettes/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the Cassette to update.
</Parameter>

### Body parameters

<Parameter name="name" type="string" required="true" %}
The name of the Cassette.
</Parameter>

### Response

{% partial file="api/console/cassette-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').cassettes.update('9d759f5a-7a1f-443e-a466-6471da1d367b', {
  name: 'Development'
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/cassettes/9d759f5a-7a1f-443e-a466-6471da1d367b' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Development"
}'
```

{% /code-group %}

{% partial file="api/console/cassette-response.md" /%}

{% /column %}

{% /row %}
