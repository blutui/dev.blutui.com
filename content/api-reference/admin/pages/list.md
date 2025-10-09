---
title: 'List all pages'
description: 'List all pages for a project.'
api: 'GET {handle}.blutui.com/admin/api/pages'
---

{% row %}

{% column %}
### Query parameters

<Parameter name="limit" type="integer | default: 10" %}
Limit the number of objects to return, ranging between 1 and 20.
</Parameter>

<Parameter name="page" type="integer | default: 1" %}
The current page used to display the pagination results.
</Parameter>

<Parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `list`.
</Parameter>

### Response

<Parameter name="object" type="string" %}
This will always contain `list` for this endpoint.
</Parameter>

<Parameter name="data" type="array" %}
An array of up to `limit` page resources. If no pages are available, an empty array is returned.
</Parameter>

<Parameter name="meta" type="object" %}
Additional information about the list.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.pages.list()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/pages' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

<include>./page-response-list.mdx</include>

{% /column %}

{% /row %}
