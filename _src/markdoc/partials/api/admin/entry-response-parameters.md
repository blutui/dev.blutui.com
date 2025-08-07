{% parameter name="id" type="string" %}
The unique identifier for this collection entry.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `collection_entry` for this endpoint.
{% /parameter %}

{% parameter name="*" type="any" %}
The key/value pair of a collection field.
{% /parameter %}

{% parameter name="collection" type="string | object" %}
The ID of the collection this post belongs to.
{% /parameter %}

{% parameter name="foreign_keys" type="array" %}
A list of foreign keys for the collection entry.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the entry was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the entry was updated.
{% /parameter %}
