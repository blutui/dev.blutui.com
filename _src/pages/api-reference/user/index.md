---
title: 'Retrieve current user'
description: 'Retrieve the currently authenticated user.'
api: 'GET /v1/user'
---

{% row %}

{% column %}
### Response

{% parameter name="id" type="string" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `user` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The user's full name.
{% /parameter %}

{% parameter name="two_factor_enabled" type="boolean" %}
Determine if the user has enabled two factor authentication.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The user's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The user's updated at timestamp.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.user.get()
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/user' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9c0d7ef9-277e-4360-8fcf-0815853e22a9",
  "object": "user",
  "name": "Luke Skywalker",
  "two_factor_enabled": true,
  "created_at": 1690330767,
  "updated_at": 1703633941
}
```

{% /column %}

{% /row %}
