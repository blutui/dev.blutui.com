---
title: 'Retrieve menu'
description: 'Retrieve a menu and menu items for a project.'
api: 'GET {handle}.blutui.com/admin/api/menus/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the menu to retrieve.
{% /parameter %}

### Query parameters

{% parameter name="expand" type="string[]" %}
Expand the response for the given items. Expand array accepts `items`.
{% /parameter %}

### Response

{% partial file="api/admin/menu-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.menus.get('9a5b0b29-a4f8-4df6-bf53-f282af312686')
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://{handle}.blutui.com/admin/api/menus/9a5b0b29-a4f8-4df6-bf53-f282af312686' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% partial file="api/admin/menu-response.md" /%}

{% /column %}

{% /row %}
