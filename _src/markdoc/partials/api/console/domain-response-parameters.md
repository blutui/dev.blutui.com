{% parameter name="id" type="string" %}
The unique identifier for this domain.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `domain` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The domain name.
{% /parameter %}

{% parameter name="token" type="string" %}
The verification token used to verify this domain.
{% /parameter %}

{% parameter name="project" type="string | null" %}
The ID of the project this domain belongs to.
{% /parameter %}

{% parameter name="verified_at" type="timestamp" %}
The domain's verified at timestamp.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The domain's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The domain's updated at timestamp.
{% /parameter %}
