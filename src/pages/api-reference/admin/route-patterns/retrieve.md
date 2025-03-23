---
title: 'Retrieve route pattern'
description: 'Retrieve a route pattern for a project.'
api: 'GET {handle}.blutui.com/admin/api/route_patterns/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the route_pattern to retrieve.
{% /parameter %}

### Response

{% partial file="api/admin/route-pattern-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.routePatterns.get('99e280a8-dfc6-4b46-8b6a-3055187fe078')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/route_patterns/99e280a8-dfc6-4b46-8b6a-3055187fe078' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/route-pattern-response.md" /%}

{% /column %}

{% /row %}
