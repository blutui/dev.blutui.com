---
title: 'List all project domains'
description: 'List all domains for a project in your agency.'
api: 'GET /v1/agencies/{username}/projects/{id}/domains'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the project to retrieve.
{% /parameter %}

### Query parameters

{% parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
{% /parameter %}

{% parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
{% /parameter %}

### Response

{% partial file="api/console/domain-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.domains('9c17d63b-96c0-4315-b4dd-e55373ce4ffd')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/projects/9c17d63b-96c0-4315-b4dd-e55373ce4ffd/domains' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/domain-response-list.md" /%}

{% /column %}

{% /row %}
