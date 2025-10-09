---
title: 'Republish project'
description: 'Republish a project in your agency.'
api: 'POST api.blutui.com/v1/agencies/{username}/projects/{id}/republish'
---

{% row %}

{% column %}
### Response

{% partial file="api/console/project-response-parameters.mdx</include>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.republish('9c17d680-e0af-4f00-9e28-08c4e38e89e0')
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/projects/9c17d680-e0af-4f00-9e28-08c4e38e89e0/republish' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/project-response.mdx</include>

{% /column %}

{% /row %}
