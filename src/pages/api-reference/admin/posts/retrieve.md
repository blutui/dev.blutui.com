---
title: 'Retrieve post'
description: 'Retrieve a blog post for a project.'
api: 'GET {handle}.blutui.com/admin/api/posts/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the blog post to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/post-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.posts.get('9a53098c-29df-4347-bfdb-49be0850db29')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/posts/9a53098c-29df-4347-bfdb-49be0850db29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/post-response.md" /%}

{% /column %}

{% /row %}
