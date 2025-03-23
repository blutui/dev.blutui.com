---
title: 'Retrieve submission'
description: 'Retrieve a submission for a form in a project.'
api: 'GET {handle}.blutui.com/admin/api/forms/{form_id}/submissions/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the form submission to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/submission-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.submissions.get('form-id', '9cc276b2-3f30-4332-bda4-f4d2abb21d08')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/forms/form-id/submissions/9cc276b2-3f30-4332-bda4-f4d2abb21d08' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/submission-response.md" /%}

{% /column %}

{% /row %}
