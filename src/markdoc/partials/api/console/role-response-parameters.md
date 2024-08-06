{% parameter name="id" type="string" %}
The unique identifier for this role.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `role` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The role name.
{% /parameter %}

{% parameter name="description" type="string | null" %}
The description of the role.
{% /parameter %}

{% parameter name="is_super" type="boolean" %}
Determine if the role is a super role. Super roles cannot be removed.
{% /parameter %}

{% parameter name="permissions" type="object" %}
An object defining the permissions associated with the role. Each key in the object represents a specific permission, and the value is a boolean indicating whether the permission is granted (true) or denied (false).
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The role's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The role's updated at timestamp.
{% /parameter %}
