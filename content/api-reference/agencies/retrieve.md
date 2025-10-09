---
title: 'Retrieve agency'
description: 'Retrieve an agency for the currently authenticated user.'
api: 'GET api.blutui.com/v1/agencies/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the agency to retrieve.
</Parameter>

### Response

{% partial file="api/agency-response-parameters.mdx</include>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agencies.get('9af3accc-1536-4336-8cc3-3b3b2a96c18a')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/9af3accc-1536-4336-8cc3-3b3b2a96c18a' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/agency-response.mdx</include>

{% /column %}

{% /row %}
