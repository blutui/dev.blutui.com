---
title: 'Remove blog'
description: 'Remove a blog from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/blogs/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the blog to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this blog.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `blog` for this endpoint.
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

blutui.project('one').admin.blogs.remove('99e2addd-e8d2-45c3-8184-fbcae8a6cf29')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/blogs/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "99e2addd-e8d2-45c3-8184-fbcae8a6cf29",
  "object": "blog",
  "deleted": true
}
```

{% /column %}

{% /row %}
