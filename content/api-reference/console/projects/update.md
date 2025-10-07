---
title: 'Update project'
description: 'Update a project in your agency.'
api: 'PATCH /v1/agencies/{username}/projects/{id}'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" %}
The name of the project.
{% /parameter %}

{% parameter name="password" type="string" %}
The password used to access the staging URL of the project.
{% /parameter %}

{% parameter name="timezone" type="string" %}
The timezone of the project. The value must be a valid timezone string, check the [list of supported timezones](/api/timezones) for more information.
{% /parameter %}

{% parameter name="primary_domain" type="string | null" %}
The ID of a verified domain to be used as the project's primary domain.
{% /parameter %}

{% parameter name="description" type="string | null" %}
The project description.
{% /parameter %}

### Response

{% partial file="api/console/project-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').projects.update('9c17d680-e0af-4f00-9e28-08c4e38e89e0', {
  primaryDomain: '9c17d680-e0af-4f00-9e28-08c4e38e89e0',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://api.blutui.com/v1/agencies/studio/projects/9c17d680-e0af-4f00-9e28-08c4e38e89e0' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "primary_domain": "9c17d680-e0af-4f00-9e28-08c4e38e89e0"
}'
```

{% /code-group %}

{% partial file="api/console/project-response.md" /%}

{% /column %}

{% /row %}
