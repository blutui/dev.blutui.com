---
title: 'Update post'
description: 'Update a blog post in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/posts/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the blog post to update.
{% /parameter %}

### Body parameters

{% parameter name="title" type="string" %}
The title for the blog post.
{% /parameter %}

{% parameter name="slug" type="string" %}
The unique slug for this blog post.
{% /parameter %}

{% parameter name="content" type="string" %}
The HTML content of the blog post.
{% /parameter %}

{% parameter name="author" type="string" %}
The author of the blog post.
{% /parameter %}

{% parameter name="blog" type="string" %}
The ID of the blog this post belongs to.
{% /parameter %}

{% parameter name="published_date" type="string" %}
The date and time when the blog post will be published.
{% /parameter %}

{% parameter name="description" type="string" %}
A short description of the blog post.
{% /parameter %}

{% parameter name="feature_image" type="string" %}
The URL of the featured image.
{% /parameter %}

### Response

{% partial file="api/admin/post-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.posts.update('9a53098c-29df-4347-bfdb-49be0850db29', {
  title: 'A very awesome post',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/posts/9a53098c-29df-4347-bfdb-49be0850db29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "title": "A very awesome post"
}'
```

{% /code-group %}

{% partial file="api/admin/post-response.md" /%}

{% /column %}

{% /row %}
