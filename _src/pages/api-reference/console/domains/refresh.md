---
title: 'Refresh domain token'
description: 'Refresh the verification token for a domain from your agency.'
api: 'POST /v1/agencies/{username}/domains/{id}/refresh'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the domain to refresh the verification token.
{% /parameter %}

### Response

{% partial file="api/console/domain-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').domains.refresh('9c17d680-e0af-4f00-9e28-08c4e38e89e0')
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/domains/9c17d680-e0af-4f00-9e28-08c4e38e89e0/refresh' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/domain-response.md" /%}

{% /column %}

{% /row %}
