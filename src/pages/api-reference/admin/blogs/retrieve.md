---
title: 'Retrieve blog'
description: 'Retrieve a blog for a project.'
api: 'GET {handle}.blutui.com/admin/api/blogs/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the blog to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/blog-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.blogs.get('99e2addd-e8d2-45c3-8184-fbcae8a6cf29')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/blogs/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/blog-response.md" /%}

{% /column %}

{% /row %}
