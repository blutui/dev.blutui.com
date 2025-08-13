{% parameter name="id" type="string" %}
The unique identifier for this collection.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `collection` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The name of this collection.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique handle for this collection.
{% /parameter %}

{% parameter name="fields" type="array" %}
The list of fields for this collection.
{% /parameter %}

{% parameter name="fields.*.id" type="string" %}
The unique identifier for the collection field.
{% /parameter %}

{% parameter name="fields.*.name" type="string" %}
The name of the collection field.
{% /parameter %}

{% parameter name="fields.*.label" type="string" %}
The user friendly label of the collection field.
{% /parameter %}

{% parameter name="fields.*.type" type="string" %}
The type of the collection field.
{% /parameter %}

{% parameter name="fields.*.default_value" type="string | null" %}
The default value of the collection field.
{% /parameter %}

{% parameter name="fields.*.help_text" type="string | null" %}
The description of what the collection field is for.
{% /parameter %}

{% parameter name="fields.*.required" type="boolean" %}
Whether the collection field is required or not.
{% /parameter %}

{% parameter name="fields.*.order" type="number" %}
The order of the collection field.
{% /parameter %}

{% parameter name="links" type="array" %}
The list of links for this collection.
{% /parameter %}

{% parameter name="parent_links" type="array" %}
The list of parent links for this collection.
{% /parameter %}

{% parameter name="deleted_at" type="string | null" %}
The date and time when the collection was deleted.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the collection was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the collection was updated.
{% /parameter %}
