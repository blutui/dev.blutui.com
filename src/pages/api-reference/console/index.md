---
title: 'Get the current user'
api: 'GET /v1/user'
---

{% row %}

{% column %}
Retrieve the currently authenticated user.

### Response

{% parameter name="id" type="string" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="object" type="string" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="name" type="string" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="two_factor_enabled" type="boolean" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The unique identifier for this user.
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
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
  "object": "user",
  "name": "Luke Skywalker",
  "two_factor_enabled": true,
  "created_at": 1690330767,
  "updated_at": 1703633941
}
```

{% /column %}

{% /row %}
