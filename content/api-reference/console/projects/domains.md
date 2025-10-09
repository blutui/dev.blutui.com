---
title: 'List all project domains'
description: 'List all domains for a project in your agency.'
api: 'GET api.blutui.com/v1/agencies/{username}/projects/{id}/domains'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the project to retrieve.
</Parameter>

### Query parameters

<Parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
</Parameter>

<Parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
</Parameter>

### Response

{% partial file="api/console/domain-response-parameters.mdx</include>

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

{% partial file="api/console/domain-response-list.mdx</include>

{% /column %}

{% /row %}
