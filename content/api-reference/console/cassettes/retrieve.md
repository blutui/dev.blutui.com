---
title: 'Retrieve Cassette'
description: 'Retrieve a Cassette for a project your agency.'
api: 'GET api.blutui.com/v1/agencies/{username}/cassettes/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the Cassette to retrieve.
</Parameter>

### Query parameters

<Parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `project`.
</Parameter>

### Response

{% partial file="api/console/cassette-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').cassettes.get('9d759f5a-7a1f-443e-a466-6471da1d367b')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/cassettes/9d759f5a-7a1f-443e-a466-6471da1d367b' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/cassette-response.md" /%}

{% /column %}

{% /row %}
