{% parameter name="id" type="string" %}
The unique identifier for this form submission.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `form_submission` for this endpoint.
{% /parameter %}

{% parameter name="body" type="object" %}
The form submission body. This is the response of someone who submitted the form submission.
{% /parameter %}

{% parameter name="form" type="string | object" %}
The ID of the form this submission belongs to.
{% /parameter %}

{% parameter name="is_spam" type="boolean" %}
Whether the form submission was flagged as spam or not.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the submission was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the submission was updated.
{% /parameter %}
