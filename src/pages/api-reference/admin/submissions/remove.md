---
title: 'Remove submission'
description: 'Remove a submission from a form in a project.'
api: 'DELETE {handle}.blutui.com/admin/api/forms/{form_id}/submissions/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the form submission to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this form submission.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `form_submission` for this endpoint.
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

blutui.project('one').admin.submissions.remove('form-id', '9cc276b2-3f30-4332-bda4-f4d2abb21d08')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/forms/form-id/submissions/9cc276b2-3f30-4332-bda4-f4d2abb21d08' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9cc276b2-3f30-4332-bda4-f4d2abb21d08",
  "object": "form_submission",
  "deleted": true
}
```

{% /column %}

{% /row %}
