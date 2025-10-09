---
title: 'Remove menu'
description: 'Remove a menu and menu items for a project.'
api: 'DELETE {handle}.blutui.com/admin/api/menus/{id}'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The ID of the menu to remove.
</Parameter>

### Response

<Parameter name="id" type="string" %}
The unique identifier for this menu.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `menu` for this endpoint.
</Parameter>

<Parameter name="deleted" type="boolean" %}
Determine if the object was successfully deleted.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.project('one').admin.menus.remove('9a5b0b29-a4f8-4df6-bf53-f282af312686')
```

```bash {% process=false filename="cURL" %}
curl -X DELETE 'https://{handle}.blutui.com/admin/api/menus/9a5b0b29-a4f8-4df6-bf53-f282af312686' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

```json {% process=false filename="Response" %}
{
  "id": "9a5b0b29-a4f8-4df6-bf53-f282af312686",
  "object": "menu",
  "deleted": true
}
```

{% /column %}

{% /row %}
