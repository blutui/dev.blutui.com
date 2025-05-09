---
title: 'List all submissions'
description: 'List all submissions for a form in a project.'
api: 'GET {handle}.blutui.com/admin/api/forms/{form_id}/submissions'
---

{% row %}

{% column %}
### Query parameters

{% parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
{% /parameter %}

{% parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
{% /parameter %}

{% parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `list`.
{% /parameter %}

### Response

{% parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
{% /parameter %}

{% parameter name="data" type="array" %}
An array of up to `limit` form submission resources. If no form submissions are available, an empty array is returned.
{% /parameter %}

{% parameter name="meta" type="object" %}
Additional information about the list.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.submissions.list('form-id')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/forms/form-id/submissions' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/submission-response-list.md" /%}

{% /column %}

{% /row %}
