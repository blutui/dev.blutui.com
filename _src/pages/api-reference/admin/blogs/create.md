---
title: 'Create blog'
description: 'Create a blog in a project.'
api: 'POST {handle}.blutui.com/admin/api/blogs'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="name" type="string" required=true %}
The name of the blog.
{% /parameter %}

{% parameter name="uri" type="string" required=true %}
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

blutui.project('one').admin.blogs.create({
  name: 'Blog',
  uri: '/blog',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/blogs' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Blog",
  "uri": "/blog"
}'
```

{% /code-group %}

{% partial file="api/admin/blog-response.md" /%}

{% /column %}

{% /row %}
