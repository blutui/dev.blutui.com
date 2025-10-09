---
title: 'Retrieve project'
description: 'Retrieve a project in your agency.'
api: 'GET api.blutui.com/v1/agencies/{username}/projects/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the project to retrieve.
</Parameter>

### Query parameters

<Parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `primary_domain`.
</Parameter>

### Response

{% partial file="api/console/project-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.get('9c17d680-e0af-4f00-9e28-08c4e38e89e0')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/studio/projects/9c17d680-e0af-4f00-9e28-08c4e38e89e0' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/console/project-response.md" /%}

{% /column %}

{% /row %}
