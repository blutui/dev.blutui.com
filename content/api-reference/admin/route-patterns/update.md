---
title: 'Update route pattern'
description: 'Update a route pattern in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/route_patterns/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the route pattern to update.
</Parameter>

### Body parameters

<Parameter name="template" type="string" %}
The template used to display the resolved route.
</Parameter>

<Parameter name="pattern" type="array" %}
A list of route patterns. Min: 1 pattern.
</Parameter>

<Parameter name="pattern.*.type" type="string" %}
The type of route pattern.
</Parameter>

<Parameter name="pattern.*.name" type="string" %}
The name of the route pattern.
</Parameter>

<Parameter name="pattern.*.value" type="string | null" %}
The value of the route pattern if any.
</Parameter>

### Response

<include>./route-pattern-response-parameters.mdx</include>

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

<include>./route-pattern-response.mdx</include>

{% /column %}

{% /row %}
