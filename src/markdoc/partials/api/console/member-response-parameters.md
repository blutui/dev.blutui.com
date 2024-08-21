{% parameter name="id" type="string" %}
The unique identifier for this team member.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `member` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The team member's name.
{% /parameter %}

{% parameter name="avatar" type="string | null" %}
The avatar URL for the team member.
{% /parameter %}

{% parameter name="email" type="string" %}
The email address of the team member.
{% /parameter %}

{% parameter name="two_factor_enabled" type="boolean" %}
Whether the team member has enabled two factor authentication.
{% /parameter %}

{% parameter name="has_full_access" type="boolean" %}
Whether the team member has access to all projects in the agency.
{% /parameter %}

{% parameter name="role" type="object" %}
The team member's role in the agency.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The member's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The member's updated at timestamp.
{% /parameter %}
