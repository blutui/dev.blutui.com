---
title: Link response parameters
---

<Parameter name="id" type="string" %}
The unique identifier for this collection link.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `collection_link` for this endpoint.
</Parameter>

<Parameter name="collection_id" type="string" %}
The ID of the collection that is linked from.
</Parameter>

<Parameter name="to" type="string" %}
The ID of the collection that is linked to.
</Parameter>

<Parameter name="type" type="string" %}
The type of collection link.
</Parameter>

<Parameter name="through_field" type="string" %}
The `name` of the collection field the link is through.
</Parameter>

<Parameter name="foreign_key" type="string" %}
The `name` of the foreign key on the collection that is linked to.
</Parameter>

<Parameter name="created_at" type="string" %}
The date and time when the collection link was created.
</Parameter>

<Parameter name="updated_at" type="string" %}
The date and time when the collection link was updated.
</Parameter>
