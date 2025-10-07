---
title: 'Create project'
description: 'Create a project to your agency.'
api: 'POST /v1/agencies/{username}/projects'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" required=true %}
The name of the project.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique slug of the project.
{% /parameter %}

{% parameter name="timezone" type="string" %}
The timezone of the project. The value must be a valid timezone string, check the [list of supported timezones](/api/timezones) for more information.
{% /parameter %}

{% parameter name="description" type="string" %}
The description of the project.
{% /parameter %}

### Response

{% partial file="api/console/project-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.create({
  name: 'Example Site',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/projects' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Example Site"
}'
```

{% /code-group %}

{% partial file="api/console/project-response.md" /%}

{% /column %}

{% /row %}
