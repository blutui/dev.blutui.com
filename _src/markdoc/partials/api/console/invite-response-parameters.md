{% parameter name="id" type="string" %}
The unique identifier for this invite.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `invite` for this endpoint.
{% /parameter %}

{% parameter name="email" type="string" %}
The email address of the invited team member.
{% /parameter %}

{% parameter name="role" type="object" %}
The invited team member's role in the agency.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The invite's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The invite's updated at timestamp.
{% /parameter %}
