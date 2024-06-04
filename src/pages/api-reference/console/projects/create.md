---
title: 'Add project'
description: 'Add a project to your agency.'
api: 'POST /v1/agencies/{username}/projects'
---

{% row %}

{% column %}
### Body parameters

     <!-- 'name' => ['required', 'string', 'max:191', new \App\Rules\HandleBlacklist()],
            'handle' => ['string', 'max:191', new SnakeCase],
            'timezone' => 'string|in:' . implode(',', $this->timezones()),
            'description' => ['nullable', 'string'],
            'subdomain' => ['nullable', 'string', 'alpha_dash', 'max:30', 'regex:/^[A-Za-z0-9_-]*$/', 'unique:sites,subdomain', new \App\Rules\HandleBlacklist()], -->

{% parameter name="name" type="string" required=true %}
The name of the project.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique slug of the project.
{% /parameter %}

{% parameter name="timezone" type="string" %}
The timezone of the project. Must be a valid timezone string. Check the [list of supported timezones]().
{% /parameter %}

{% parameter name="description" type="string" %}
The description of the project.
{% /parameter %}

{% parameter name="subdomain" type="string" %}
The subdomain of the project. Your project will be accessible at `https://subdomain.blutui.com`.
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
