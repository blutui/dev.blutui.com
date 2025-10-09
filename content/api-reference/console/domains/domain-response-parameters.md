---
title: Domain response parameters
---

<Parameter name="id" type="string" %}
The unique identifier for this domain.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `domain` for this endpoint.
</Parameter>

<Parameter name="name" type="string" %}
The domain name.
</Parameter>

<Parameter name="token" type="string" %}
The verification token used to verify this domain.
</Parameter>

<Parameter name="project" type="string | null" %}
The ID of the project this domain belongs to.
</Parameter>

<Parameter name="verified_at" type="timestamp" %}
The domain's verified at timestamp.
</Parameter>

<Parameter name="created_at" type="timestamp" %}
The domain's created at timestamp.
</Parameter>

<Parameter name="updated_at" type="timestamp" %}
The domain's updated at timestamp.
</Parameter>
