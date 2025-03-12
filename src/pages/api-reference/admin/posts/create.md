---
title: 'Create post'
description: 'Create a blog post in a project.'
api: 'POST {handle}.blutui.com/admin/api/posts'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="title" type="string" required=true %}
The title for the blog post.
{% /parameter %}

{% parameter name="slug" type="string" required=true %}
The unique slug for this blog post.
{% /parameter %}

{% parameter name="content" type="string" required=true %}
The HTML content of the blog post.
{% /parameter %}

{% parameter name="author" type="string" required=true %}
The author of the blog post.
{% /parameter %}

{% parameter name="blog" type="string" required=true %}
The ID of the blog this post belongs to.
{% /parameter %}

{% parameter name="published_date" type="string" required=true %}
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

blutui.project('one').admin.posts.create({
  title: 'A very awesome post',
  slug: '/a-very-awesome-post',
  content: '<p>My post content</p>',
  author: 'John Doe',
  blog: '99e2addd-e8d2-45c3-8184-fbcae8a6cf29',
  publish_date: '2024/09/25 11:00:00',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/posts' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "title": "A very awesome post",
  "slug": "/a-very-awesome-post",
  "content": "<p>My post content</p>",
  "author": "John Doe",
  "blog": "99e2addd-e8d2-45c3-8184-fbcae8a6cf29",
  "publish_date": "2024/09/25 11:00:00"
}'
```

{% /code-group %}

{% partial file="api/admin/post-response.md" /%}

{% /column %}

{% /row %}
