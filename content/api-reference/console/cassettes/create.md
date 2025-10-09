---
title: 'Create Cassette'
description: 'Create a Cassette for a project in your agency.'
api: 'POST api.blutui.com/v1/agencies/{username}/cassettes'
---

{% row %}

{% column %}
### Body parameters

<Parameter name="name" type="string" required=true %}
The name of the Cassette.
</Parameter>

<Parameter name="project" type="string" required=true %}
The ID of the project this Cassette will belong to.
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

blutui.agency('studio').cassettes.create({
  name: 'Default',
  project: '99bc147e-966c-4dd0-8def-de817c63cf41',
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
