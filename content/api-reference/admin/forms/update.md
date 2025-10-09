---
title: 'Update form'
description: 'Update a form in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/forms/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the form to update.
</Parameter>

### Body parameters

<Parameter name="name" type="string" %}
The name of this form.
</Parameter>

<Parameter name="handle" type="string" %}
The unique handle for this form.
</Parameter>

<Parameter name="template" type="string" %}
The template used to display this form.
</Parameter>

<Parameter name="email_from" type="string" %}
The sender email address.
</Parameter>

<Parameter name="email_to" type="string" %}
The recipient email address.
</Parameter>

<Parameter name="email_cc" type="string" %}
The carbon copy email address.
</Parameter>

<Parameter name="email_bcc" type="string" %}
The blind carbon copy email address.
</Parameter>

<Parameter name="email_reply_to" type="string" %}
The reply to email address.
</Parameter>

<Parameter name="store_submissions" type="boolean" %}
Whether the form submissions should be stored or not.
</Parameter>

<Parameter name="detects_spam" type="boolean" %}
Whether the form submissions should be checked for spam or not.
</Parameter>

<Parameter name="spam_score" type="number" %}
The spam score given to a form submission in order to be marked as spam.
</Parameter>

<Parameter name="fields" type="array" %}
The fields for this form.
</Parameter>

<Parameter name="fields.*.name" type="string" required="true" %}
The name of the form field.
</Parameter>

<Parameter name="fields.*.label" type="string" required="true" %}
The label for the form field.
</Parameter>

<Parameter name="fields.*.type" type="string" required="true" %}
The type of form field.
</Parameter>

<Parameter name="fields.*.default_value" type="string | null" %}
The default value for the form field.
</Parameter>

<Parameter name="fields.*.help_text" type="string | null" %}
The a short description about this form field.
</Parameter>

<Parameter name="fields.*.order" type="number" %}
The order of the form field.
</Parameter>

<Parameter name="fields.*.placeholder" type="string | null" %}
The placeholder value for the form field.
</Parameter>

<Parameter name="fields.*.required" type="string" %}
Whether the form field is required or not.
</Parameter>

### Response

{% partial file="api/admin/form-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.forms.update('99e2addd-e8d2-45c3-8184-fbcae8a6cf29', {
  storeSubmissions: false,
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/forms/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "store_submissions": false
}'
```

{% /code-group %}

{% partial file="api/admin/form-response.md" /%}

{% /column %}

{% /row %}
