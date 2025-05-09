---
title: 'Update page'
description: 'Update a page in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/pages/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the page to update.
{% /parameter %}

### Body parameters

{% parameter name="name" type="string" %}
The name of the page.
{% /parameter %}

{% parameter name="uri" type="string" %}
The URL used to access this page.
{% /parameter %}

{% parameter name="title" type="string" %}
The title of this page.
{% /parameter %}

{% parameter name="description" type="string" %}
The description of this page.
{% /parameter %}

{% parameter name="layout" type="string" %}
The layout used to display this page.
{% /parameter %}

{% parameter name="active" type="boolean" %}
Whether the page is active or not.
{% /parameter %}

{% parameter name="publish_date" type="string" %}
The date and time when this page will be published.
{% /parameter %}

### Response

{% partial file="api/admin/page-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.pages.update('99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf', {
  name: 'Home',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/pages/99d401fe-8a1a-486f-9f1a-9c0c3fbe8caf' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Home"
}'
```

{% /code-group %}

{% partial file="api/admin/page-response.md" /%}

{% /column %}

{% /row %}
