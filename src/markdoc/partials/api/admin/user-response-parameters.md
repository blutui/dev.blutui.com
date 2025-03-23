{% parameter name="id" type="string" %}
The unique identifier for this user.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `project_user` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string | null" %}
The name of this user.
{% /parameter %}

{% parameter name="email" type="string" %}
The email address for this user.
{% /parameter %}

{% parameter name="avatar_url" type="string" %}
The URL of the avatar image for this user.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the user was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the user was updated.
{% /parameter %}
