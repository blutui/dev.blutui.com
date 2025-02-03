---
title: 'Create redirect'
description: 'Create a redirect a project.'
api: 'POST {handle}.blutui.com/admin/api/redirects'
---

{% row %}

{% column %}

### Body parameters

{% parameter name="from" type="string" required=true %}
The from url of the redirect.
{% /parameter %}

{% parameter name="to" type="string" required=true %}
The to url of the redirect.
{% /parameter %}

### Response

{% partial file="api/admin/redirect-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.redirects.create({
  from: '/about',
  to: '/about-us',
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/redirects' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "from": "/about",
  "to": "/about-us"
}'
```

{% /code-group %}

{% partial file="api/admin/redirect-response.md" /%}

{% /column %}

{% /row %}
