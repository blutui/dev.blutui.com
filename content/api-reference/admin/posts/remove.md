---
title: 'Remove post'
description: 'Remove a blog post from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/posts/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the post to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this blog post.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `post` for this endpoint.
</Parameter>

<Parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.posts.remove('9a53098c-29df-4347-bfdb-49be0850db29')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/posts/9a53098c-29df-4347-bfdb-49be0850db29' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9a53098c-29df-4347-bfdb-49be0850db29",
  "object": "post",
  "deleted": true
}
```

{% /column %}

{% /row %}
