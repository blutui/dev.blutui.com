{% parameter name="id" type="string" %}
The unique identifier for this project.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `project` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The project name.
{% /parameter %}

{% parameter name="description" type="string" %}
The project description.
{% /parameter %}

{% parameter name="image" type="string" %}
The image URL of the project.
{% /parameter %}

{% parameter name="handle" type="string" %}
The project handle.
{% /parameter %}

{% parameter name="password" type="string" %}
The project password to access the project when under development.
{% /parameter %}

{% parameter name="timezone" type="string" %}
The project timezone.
{% /parameter %}

{% parameter name="subdomain" type="string" %}
The project subdomain.
{% /parameter %}

{% parameter name="primary_domain_id" type="string | null" %}
The ID of the primary domain for this project.
{% /parameter %}

{% parameter name="primary_domain" type="object | null" %}
The primary domain for this project.
{% /parameter %}

{% parameter name="published" type="boolean" %}
The project published status.
{% /parameter %}

{% parameter name="processed" type="boolean" %}
The project processed status.
{% /parameter %}

{% parameter name="transfer_id" type="string | null" %}
The ID of the transfer for this project.
{% /parameter %}

{% parameter name="transfer" type="string | boolean" %}
The slug of transfer organization for this project.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The project's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The project's updated at timestamp.
{% /parameter %}

{% parameter name="deleted_at" type="timestamp | null" %}
The project's deleted at timestamp.
{% /parameter %}
