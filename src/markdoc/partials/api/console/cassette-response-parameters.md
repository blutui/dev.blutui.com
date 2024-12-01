{% parameter name="id" type="string" %}
The unique identifier for this Cassette.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `cassette` for this endpoint.
{% /parameter %}

{% parameter name="handle" type="string" %}
The unique handle of the Cassette. The handle is unique to every project.
{% /parameter %}

{% parameter name="name" type="string" %}
The Cassette name.
{% /parameter %}

{% parameter name="project" type="string | object" %}
The ID of the project this Cassette belongs to.
{% /parameter %}

{% parameter name="parent" type="string | object | null" %}
The parent Cassette, if this Cassette is duplicated.
{% /parameter %}

{% parameter name="created_at" type="timestamp" %}
The Cassette's created at timestamp.
{% /parameter %}

{% parameter name="updated_at" type="timestamp" %}
The Cassette's updated at timestamp.
{% /parameter %}
