---
title: 'Update agency'
description: 'Update an agency for the currently authenticated user.'
api: 'PATCH api.blutui.com/v1/agencies/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the agency to update.
</Parameter>

### Body parameters

<Parameter name="name" type="string" %}
The name of the agency.
</Parameter>

<Parameter name="email" type="string" %}
The agency's primary email address.
</Parameter>

<Parameter name="location" type="string" %}
The ISO 3166 country code for the agency's location.
</Parameter>

<Parameter name="timezone" type="string" %}
The agency's preferred timezone. The value must be a valid timezone string, check the [list of supported timezones](/api/timezones) for more information.
</Parameter>

<Parameter name="url" type="string | null" %}
The agency's website URL.
</Parameter>

<Parameter name="description" type="string | null" %}
A short description about the agency.
</Parameter>

<Parameter name="avatar" type="string | null" %}
The asset URL for the agency's avatar.
</Parameter>

### Response

{% partial file="api/agency-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agencies.update('9af3accc-1536-4336-8cc3-3b3b2a96c18a', {
  url: 'https://flume.awesome'
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/9af3accc-1536-4336-8cc3-3b3b2a96c18a' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "url": "https://flume.awesome"
}'
```

{% /code-group %}

{% partial file="api/agency-response.md" /%}

{% /column %}

{% /row %}
