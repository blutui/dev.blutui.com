{% parameter name="id" type="string" %}
The unique identifier for this collection link.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `collection_link` for this endpoint.
{% /parameter %}

{% parameter name="collection_id" type="string" %}
The ID of the collection that is linked from.
{% /parameter %}

{% parameter name="to" type="string" %}
The ID of the collection that is linked to.
{% /parameter %}

{% parameter name="type" type="string" %}
The type of collection link.
{% /parameter %}

{% parameter name="through_field" type="string" %}
The `name` of the collection field the link is through.
{% /parameter %}

{% parameter name="foreign_key" type="string" %}
The `name` of the foreign key on the collection that is linked to.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the collection link was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the collection link was updated.
{% /parameter %}
