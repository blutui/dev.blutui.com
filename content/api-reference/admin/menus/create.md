---
title: 'Create menu'
description: 'Create a menu and menu items in a project.'
api: 'POST {handle}.blutui.com/admin/api/menus'
---

{% row %}

{% column %}
### Body parameters

<Parameter name="name" type="string" required=true %}
The name of the menu.
</Parameter>

<Parameter name="handle" type="string" required=true %}
The unique slug of the menu.
</Parameter>

<Parameter name="items" type="array" %}
The list of items in the menu.
</Parameter>

<Parameter name="items.*.label" type="string" required=true %}
The label for the menu item.
</Parameter>

<Parameter name="items.*.url" type="string" required=true %}
The URL for the menu item.
</Parameter>

<Parameter name="items.*.active" type="boolean" %}
Whether the menu item is active or not.
</Parameter>

<Parameter name="items.*.is_new_tab" type="boolean" %}
Whether the menu item should open in a new tab or not.
</Parameter>

### Response

{% partial file="api/admin/menu-response-parameters.md" /%}

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.menus.create({
  name: 'Primary Menu',
  handle: 'primary-menu',
  items: [
    {
      label: 'About',
      url: '/about',
      isNewTab: false,
      active: true,
    },
  ],
})
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://{handle}.blutui.com/admin/api/menus' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
     -d $'{
  "name": "Primary Menu",
  "handle": "primary-menu",
  "items": [
    {
      "label": "About",
      "url": "/about",
      "is_new_tab": false,
      "active": true,
    }
  ]
}'
```

{% /code-group %}

{% partial file="api/admin/menu-response.md" /%}

{% /column %}

{% /row %}
