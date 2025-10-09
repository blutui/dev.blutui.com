---
title: Entry response parameters
---

<Parameter name="id" type="string" %}
The unique identifier for this collection entry.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `collection_entry` for this endpoint.
</Parameter>

<Parameter name="*" type="any" %}
The key/value pair of a collection field.
</Parameter>

<Parameter name="collection" type="string | object" %}
The ID of the collection this post belongs to.
</Parameter>

<Parameter name="foreign_keys" type="array" %}
A list of foreign keys for the collection entry.
</Parameter>

<Parameter name="created_at" type="string" %}
The date and time when the entry was created.
</Parameter>

<Parameter name="updated_at" type="string" %}
The date and time when the entry was updated.
</Parameter>
