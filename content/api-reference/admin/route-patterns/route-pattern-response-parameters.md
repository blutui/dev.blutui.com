---
title: Route pattern response parameters
---

<Parameter name="id" type="string" %}
The unique identifier for this route pattern.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `route_pattern` for this endpoint.
</Parameter>

<Parameter name="pattern" type="array" %}
A list of route patterns.
</Parameter>

<Parameter name="pattern.*.type" type="string" %}
The type of route pattern.
</Parameter>

<Parameter name="pattern.*.value" type="string | null" %}
The value of the route pattern if any.
</Parameter>

<Parameter name="pattern.*.name" type="string" %}
The name of the route pattern.
</Parameter>

<Parameter name="template" type="string" %}
The template used to display the resolved route.
</Parameter>

<Parameter name="created_at" type="string" %}
The date and time when the route pattern was created.
</Parameter>

<Parameter name="updated_at" type="string" %}
The date and time when the route pattern was updated.
</Parameter>
