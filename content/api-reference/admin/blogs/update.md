---
title: 'Update blog'
description: 'Update a blog in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/blogs/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the blog to update.
{% /parameter %}

### Body parameters

{% parameter name="name" type="string" %}
The name of the blog.
{% /parameter %}

{% parameter name="uri" type="string" %}
The URL used to view all posts that belong to this blog.
{% /parameter %}

{% parameter name="slug" type="string" %}
The unique slug of the blog.
{% /parameter %}

{% parameter name="layout" type="string" %}
The layout used to display all blog posts.
{% /parameter %}

{% parameter name="post_layout" type="string" %}
The layout used to display a single post in this blog.
{% /parameter %}

### Response

{% partial file="api/admin/blog-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.blogs.update('99e2addd-e8d2-45c3-8184-fbcae8a6cf29', {
  name: 'Blog',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/blogs/99e2addd-e8d2-45c3-8184-fbcae8a6cf29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Primary blog"
}'
```

{% /code-group %}

{% partial file="api/admin/blog-response.md" /%}

{% /column %}

{% /row %}
