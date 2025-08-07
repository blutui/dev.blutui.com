{% parameter name="id" type="string" %}
The unique identifier for this menu.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `menu` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The name of this menu.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique slug for this menu.
{% /parameter %}

{% parameter name="items" type="array" %}
The items of this menu.
{% /parameter %}

{% parameter name="items.*.id" type="string" %}
The unique identifier for the menu item.
{% /parameter %}

{% parameter name="items.*.object" type="string" %}
This will always contain `menu_item`.
{% /parameter %}

{% parameter name="items.*.label" type="string" %}
This label for the menu item.
{% /parameter %}

{% parameter name="items.*.url" type="string" %}
The URL for the menu item.
{% /parameter %}

{% parameter name="items.*.active" type="string" %}
Whether the menu item is active or not.
{% /parameter %}

{% parameter name="items.*.is_new_tab" type="string" %}
Whether the menu item should open in a new tab or not.
{% /parameter %}

{% parameter name="items.*.order" type="string" %}
The order of the menu item in the list.
{% /parameter %}

{% parameter name="items.*.items" type="string" %}
The submenu items for this menu item.
{% /parameter %}

{% parameter name="items.*.created_at" type="string" %}
The menu item's created at timestamp.
{% /parameter %}

{% parameter name="items.*.updated_at" type="string" %}
The menu item's created at timestamp.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The menu's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The menu's updated at timestamp.
{% /parameter %}
