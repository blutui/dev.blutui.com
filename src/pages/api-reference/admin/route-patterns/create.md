---
title: 'Create route pattern'
description: 'Create a route pattern in a project.'
api: 'POST {handle}.blutui.com/admin/api/route_patterns'
---

{% row %}

{% column %}
### Body parameters

{% parameter name="template" type="string" required="true" %}
The template used to display the resolved route.
{% /parameter %}

{% parameter name="pattern" type="array" required="true" %}
A list of route patterns. Min: 1 pattern.
{% /parameter %}

{% parameter name="pattern.*.type" type="string" required="true" %}
The type of route pattern.
{% /parameter %}

{% parameter name="pattern.*.name" type="string" required="true" %}
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

blutui.project('one').admin.routePatterns.create({
  template: 'pages/products/product.canvas',
  pattern: [
    {
      type: 'string',
      value: 'products',
      name: 'products',
    },
    {
      type: 'slug',
      name: 'slug',
    },
  ],
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/route_patterns' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "template": "pages/products/product.canvas",
  "pattern": [
    {
      "type": "string",
      "value": "products",
      "name": "products"
    },
    {
      "type": "slug",
      "name": "slug"
    }
  ]
}'
```

{% /code-group %}

{% partial file="api/admin/route-pattern-response.md" /%}

{% /column %}

{% /row %}
