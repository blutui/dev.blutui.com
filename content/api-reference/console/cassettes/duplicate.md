---
title: 'Duplicate Cassette'
description: 'Duplicate a Cassette for a project your agency.'
api: 'POST api.blutui.com/v1/agencies/{username}/cassettes/{id}/duplicate'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the Cassette to duplicate.
</Parameter>

### Body parameters

<Parameter name="name" type="string" required=true %}
The name of the Cassette.
</Parameter>

<Parameter name="handle" type="array" required=true %}
The unique handle for the Cassette.
</Parameter>

### Response

{% partial file="api/console/cassette-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').cassettes.duplicate('9d759f5a-7a1f-443e-a466-6471da1d367b', {
  name: 'Default',
  handle: 'default',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/cassettes' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Default",
  "project": "99bc147e-966c-4dd0-8def-de817c63cf41",
  "handle": "default",
}'
```

{% /code-group %}

{% partial file="api/console/cassette-response.md" /%}

{% /column %}

{% /row %}
