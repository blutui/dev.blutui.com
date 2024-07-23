{% parameter name="id" type="string" %}
The unique identifier for this agency.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `agency` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The agency name.
{% /parameter %}

{% parameter name="email" type="string" %}
The agency's preferred email address.
{% /parameter %}

{% parameter name="slug" type="string" %}
The agency's unique username.
{% /parameter %}

{% parameter name="url" type="string | null" %}
The agency's website URL.
{% /parameter %}

{% parameter name="location" type="string" %}
The ISO 3166 country code for the agency's location.
{% /parameter %}

{% parameter name="timezone" type="string" %}
The agency's preferred timezone.
{% /parameter %}

{% parameter name="avatar" type="string | null" %}
The asset URL for the agency's avatar.
{% /parameter %}

{% parameter name="description" type="string | null" %}
A short description about the agency.
{% /parameter %}

{% parameter name="trial_mode" type="boolean" %}
Determine whether the agency is subscribed to Blutui.
{% /parameter %}

{% parameter name="is_agency" type="boolean" %}
Determine whether the agency is a qualified Blutui agency.
{% /parameter %}

{% parameter name="is_aws_customer" type="boolean" %}
Determine whether the agency is an AWS marketplace customer.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The agency's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The agency's updated at timestamp.
{% /parameter %}
