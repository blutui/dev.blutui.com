{% parameter name="id" type="string" %}
The unique identifier for this webhook endpoint.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `webhook` for this endpoint.
{% /parameter %}

{% parameter name="url" type="string" %}
The webhook endpoint to receive events.
{% /parameter %}

{% parameter name="events" type="array" %}
The list of events to send to the webhook endpoint.
{% /parameter %}

{% parameter name="events.*" type="string" %}
The webhook event.
{% /parameter %}

{% parameter name="disabled" type="boolean" %}
Whether the webhook endpoint is disabled or not.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the webhook endpoint was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the webhook endpoint was updated.
{% /parameter %}
