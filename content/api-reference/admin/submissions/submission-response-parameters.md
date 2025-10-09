---
title: Submission response parameters
---

<Parameter name="id" type="string" %}
The unique identifier for this form submission.
</Parameter>

<Parameter name="object" type="string" %}
This will always contain `form_submission` for this endpoint.
</Parameter>

<Parameter name="body" type="object" %}
The form submission body. This is the response of someone who submitted the form submission.
</Parameter>

<Parameter name="form" type="string | object" %}
The ID of the form this submission belongs to.
</Parameter>

<Parameter name="is_spam" type="boolean" %}
Whether the form submission was flagged as spam or not.
</Parameter>

<Parameter name="created_at" type="string" %}
The date and time when the submission was created.
</Parameter>

<Parameter name="updated_at" type="string" %}
The date and time when the submission was updated.
</Parameter>
