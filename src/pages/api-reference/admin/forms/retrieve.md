---
title: 'Retrieve form'
description: 'Retrieve a form for a project.'
api: 'GET {handle}.blutui.com/admin/api/forms/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the form to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/form-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.forms.get('0195b657-82dd-718a-8092-9ea39771ec83')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/forms/0195b657-82dd-718a-8092-9ea39771ec83' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/form-response.md" /%}

{% /column %}

{% /row %}
