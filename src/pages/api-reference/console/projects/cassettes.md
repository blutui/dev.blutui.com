---
title: 'List all project Cassettes'
description: 'List all Cassettes for a project in your agency.'
api: 'GET /v1/agencies/{username}/projects/{id}/cassettes'
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

{% partial file="api/console/cassette-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.cassettes('9d759f5a-7a1f-443e-a466-6471da1d367b')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/projects/9d759f5a-7a1f-443e-a466-6471da1d367b/cassettes' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/cassette-response-list.md" /%}

{% /column %}

{% /row %}
