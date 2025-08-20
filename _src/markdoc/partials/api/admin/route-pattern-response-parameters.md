{% parameter name="id" type="string" %}
The unique identifier for this route pattern.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `route_pattern` for this endpoint.
{% /parameter %}

{% parameter name="pattern" type="array" %}
A list of route patterns.
{% /parameter %}

{% parameter name="pattern.*.type" type="string" %}
The type of route pattern.
{% /parameter %}

{% parameter name="pattern.*.value" type="string | null" %}
The value of the route pattern if any.
{% /parameter %}

{% parameter name="pattern.*.name" type="string" %}
The name of the route pattern.
{% /parameter %}

{% parameter name="template" type="string" %}
The template used to display the resolved route.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the route pattern was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the route pattern was updated.
{% /parameter %}
