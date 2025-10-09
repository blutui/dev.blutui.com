---
title: Route pattern response list
---

```json {% process=false filename="Response" %}
{
  "object": "list",
  "data": [
    {
      "id": "99e280a8-dfc6-4b46-8b6a-3055187fe078",
      "object": "route_pattern",
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
      ],
      "template": "pages/products/product.canvas",
      "created_at": "2023-08-14T16:49:46+12:00",
      "updated_at": "2023-08-14T16:49:46+12:00"
    },
    {...},
    {...}
  ],
  "meta": {
    "has_more": false,
    "current_page": 1,
    "from": 1,
    "to": 3,
    "total": 3,
    "per_page": 10,
    "last_page": 1
  }
}
```
