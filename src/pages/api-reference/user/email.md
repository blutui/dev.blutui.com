---
title: "Retrieve current user's email"
description: "Retrieve the currently authenticated user's email address."
api: 'GET /v1/user/email'
---

{% row %}

{% column %}
### Response

{% parameter name="id" type="string" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `user_email` for this endpoint.
{% /parameter %}

{% parameter name="email" type="string" %}
The user's email address.
{% /parameter %}

{% parameter name="verified" type="boolean" %}
Determine if the user has verified their email address.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.user.email()
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
  "object": "user_email",
  "email": "luke@tatooine.planet",
  "verified": true
}
```
