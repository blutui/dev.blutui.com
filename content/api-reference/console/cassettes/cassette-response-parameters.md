---
title: Cassette response parameters
---

<Parameter name="id" type="string" %}
The unique identifier for this Cassette.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `cassette` for this endpoint.
</Parameter>

<Parameter name="handle" type="string" %}
The unique handle of the Cassette. The handle is only unique to every Cassette within a project.
</Parameter>

<Parameter name="name" type="string" %}
The Cassette name.
</Parameter>

<Parameter name="project" type="string | object" %}
The ID of the project this Cassette belongs to.
</Parameter>

<Parameter name="parent" type="string | object | null" %}
The parent Cassette, if this Cassette is duplicated.
</Parameter>

<Parameter name="created_at" type="timestamp" %}
The Cassette's created at timestamp.
</Parameter>

<Parameter name="updated_at" type="timestamp" %}
The Cassette's updated at timestamp.
</Parameter>
