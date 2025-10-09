---
title: 'Retrieve route pattern'
description: 'Retrieve a route pattern for a project.'
api: 'GET {handle}.blutui.com/admin/api/route_patterns/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the route_pattern to retrieve.
</Parameter>

### Response

<include>./route-pattern-response-parameters.mdx</include>

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

<include>./route-pattern-response.mdx</include>

{% /column %}

{% /row %}
