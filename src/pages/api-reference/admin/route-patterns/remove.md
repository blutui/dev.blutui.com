---
title: 'Remove route pattern'
description: 'Remove a route pattern from a project.'
api: 'DELETE {handle}.blutui.com/admin/api/route_patterns/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the route pattern to remove.
{% /parameter %}

### Response

{% parameter name="id" type="string" %}
The unique identifier for this route pattern.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `route_pattern` for this endpoint.
{% /parameter %}

{% parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
{% /parameter %}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.routePatterns.remove('99e280a8-dfc6-4b46-8b6a-3055187fe078')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/route_patterns/99e280a8-dfc6-4b46-8b6a-3055187fe078' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "99e280a8-dfc6-4b46-8b6a-3055187fe078",
  "object": "route_pattern",
  "deleted": true
}
```

{% /column %}

{% /row %}
