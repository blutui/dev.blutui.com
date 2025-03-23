---
title: 'Update route pattern'
description: 'Update a route pattern in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/route_patterns/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the route pattern to update.
{% /parameter %}

### Body parameters

{% parameter name="template" type="string" %}
The template used to display the resolved route.
{% /parameter %}

{% parameter name="pattern" type="array" %}
A list of route patterns. Min: 1 pattern.
{% /parameter %}

{% parameter name="pattern.*.type" type="string" %}
The type of route pattern.
{% /parameter %}

{% parameter name="pattern.*.name" type="string" %}
The name of the route pattern.
{% /parameter %}

{% parameter name="pattern.*.value" type="string | null" %}
The value of the route pattern if any.
{% /parameter %}

### Response

{% partial file="api/admin/route-pattern-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.routePatterns.update('99e280a8-dfc6-4b46-8b6a-3055187fe078', {
  template: 'pages/products/product.canvas',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/route_patterns/99e280a8-dfc6-4b46-8b6a-3055187fe078' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "template": "pages/products/product.canvas"
}'
```

{% /code-group %}

{% partial file="api/admin/route-pattern-response.md" /%}

{% /column %}

{% /row %}
