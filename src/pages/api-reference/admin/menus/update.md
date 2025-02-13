---
title: 'Update menu'
description: 'Update a menu and menu items in a project.'
api: 'PATCH {handle}.blutui.com/admin/api/menus/{id}'
---

{% row %}

{% column %}
### Path parameters

{% parameter name="id" type="string" required="true" %}
The ID of the menu to update.
{% /parameter %}

### Body parameters

{% parameter name="name" type="string" %}
The name of the menu.
{% /parameter %}

{% parameter name="items" type="array" %}
The list of items in the menu.
{% /parameter %}

{% parameter name="items.*.label" type="string" %}
The label for the menu item.
{% /parameter %}

{% parameter name="items.*.url" type="string" %}
The URL for the menu item.
{% /parameter %}

{% parameter name="items.*.active" type="boolean" %}
Whether the menu item is active or not.
{% /parameter %}

{% parameter name="items.*.is_new_tab" type="boolean" %}
Whether the menu item should open in a new tab or not.
{% /parameter %}

### Response

{% partial file="api/admin/menu-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.menus.update('9a5b0b29-a4f8-4df6-bf53-f282af312686', {
  name: 'Primary Menu',
})
```

```bash {% process=false filename="cURL" %}
curl -X PATCH 'https://{handle}.blutui.com/admin/api/menus/9a5b0b29-a4f8-4df6-bf53-f282af312686' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Primary Menu"
}'
```

{% /code-group %}

{% partial file="api/admin/menu-response.md" /%}

{% /column %}

{% /row %}
