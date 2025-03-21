{% parameter name="id" type="string" %}
The unique identifier for this form.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `form` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The name of this form.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique handle for this form.
{% /parameter %}

{% parameter name="template" type="string" %}
The template used to display this form.
{% /parameter %}

{% parameter name="email_from" type="string" %}
The sender email address.
{% /parameter %}

{% parameter name="email_to" type="string" %}
The recipient email address.
{% /parameter %}

{% parameter name="email_cc" type="string" %}
The carbon copy email address.
{% /parameter %}

{% parameter name="email_bcc" type="string" %}
The blind carbon copy email address.
{% /parameter %}

{% parameter name="email_reply_to" type="string" %}
The reply to email address.
{% /parameter %}

{% parameter name="store_submissions" type="boolean" %}
Whether the form submissions should be stored or not.
{% /parameter %}

{% parameter name="detects_spam" type="boolean" %}
Whether the form submissions should be checked for spam or not.
{% /parameter %}

{% parameter name="spam_score" type="number" %}
The spam score given to a form submission in order to be marked as spam.
{% /parameter %}

{% parameter name="fields" type="array" %}
The fields for this form.
{% /parameter %}

{% parameter name="fields.*.id" type="string" %}
The unique identifier for the form field.
{% /parameter %}

{% parameter name="fields.*.object" type="string" %}
This will always contain `form_field`.
{% /parameter %}

{% parameter name="fields.*.name" type="string" %}
The name of the form field.
{% /parameter %}

{% parameter name="fields.*.label" type="string" %}
The label for the form field.
{% /parameter %}

{% parameter name="fields.*.default_value" type="string | null" %}
The default value for the form field.
{% /parameter %}

{% parameter name="fields.*.help_text" type="string | null" %}
The a short description about this form field.
{% /parameter %}

{% parameter name="fields.*.order" type="number" %}
The order of the form field.
{% /parameter %}

{% parameter name="fields.*.placeholder" type="string | null" %}
The placeholder value for the form field.
{% /parameter %}

{% parameter name="fields.*.required" type="string" %}
Whether the form field is required or not.
{% /parameter %}

{% parameter name="fields.*.type" type="string" %}
The type of form field.
{% /parameter %}

{% parameter name="fields.*.created_at" type="string" %}
The date and time when the form field was created.
{% /parameter %}

{% parameter name="fields.*.updated_at" type="string" %}
The date and time when the form field was updated.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the form was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the form was updated.
{% /parameter %}
