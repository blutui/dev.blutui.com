---
title: 'Create page'
description: 'Create a page in a project.'
api: 'POST {handle}.blutui.com/admin/api/pages'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" required=true %}
The name of the page.
{% /parameter %}

{% parameter name="uri" type="string" required=true %}
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

blutui.project('one').admin.pages.create({
  name: 'Home',
  uri: '/',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/pages' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Home",
  "uri": "/"
}'
```

{% /code-group %}

{% partial file="api/admin/page-response.md" /%}

{% /column %}

{% /row %}
