---
title: 'Archive project'
description: 'Archive a project in your agency.'
api: 'DELETE /v1/agencies/{username}/projects/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the project to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this project.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `project` for this endpoint.
{% /parameter %}

{% parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.remove('9c17d680-e0af-4f00-9e28-08c4e38e89e0')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://api.blutui.com/v1/agencies/studio/projects/9c17d680-e0af-4f00-9e28-08c4e38e89e0' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9c17d680-e0af-4f00-9e28-08c4e38e89e0",
  "object": "project",
  "deleted": true
}
```

{% /column %}

{% /row %}
