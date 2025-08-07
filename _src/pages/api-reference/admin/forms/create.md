---
title: 'Create form'
description: 'Create a form in a project.'
api: 'POST {handle}.blutui.com/admin/api/forms'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" required="true" %}
The name of this form.
{% /parameter %}

{% parameter name="handle" type="string" required="true" %}
The unique handle for this form.
{% /parameter %}

{% parameter name="template" type="string" required="true" %}
The template used to display this form.
{% /parameter %}

{% parameter name="email_from" type="string" %}
The sender email address.
{% /parameter %}

{% parameter name="email_to" type="string" %}
The recipient email address.
{% /parameter %}

{% parameter name="store_submissions" type="boolean" %}
Whether the form submissions should be stored or not.
{% /parameter %}

{% parameter name="detects_spam" type="boolean" %}
Whether the form submissions should be checked for spam or not.
{% /parameter %}

{% parameter name="spam_score" type="number" %}
The spam score given to a form submission in order to be marked as spam.
{% /parameter %}

### Response

{% partial file="api/admin/form-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.forms.create({
  name: 'Contact',
  handle: 'contact',
  template: 'forms/contact.canvas'
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/forms' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Contact",
  "uri": "contact",
  "template": "forms/contact.canvas"
}'
```

{% /code-group %}

{% partial file="api/admin/form-response.md" /%}

{% /column %}

{% /row %}
