---
title: 'Retrieve domain'
description: 'Retrieve a domain in your agency.'
api: 'GET api.blutui.com/v1/agencies/{username}/domains/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the domain to retrieve.
</Parameter>

### Query parameters

<Parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `project`.
</Parameter>

### Response

{% partial file="api/console/domain-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').domains.get('9c17d680-e0af-4f00-9e28-08c4e38e89e0')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/domains/9c17d680-e0af-4f00-9e28-08c4e38e89e0' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/domain-response.md" /%}

{% /column %}

{% /row %}
