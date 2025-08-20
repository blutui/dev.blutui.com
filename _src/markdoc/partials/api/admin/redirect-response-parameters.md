{% parameter name="id" type="string" %}
The unique identifier for this redirect.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `redirect` for this endpoint.
{% /parameter %}

{% parameter name="from" type="string" %}
The from url of this redirect.
{% /parameter %}

{% parameter name="to" type="string" %}
The to url of this redirect.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The redirect's created datetime.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The redirect's updated datetime.
{% /parameter %}

{% parameter name="deleted_at" type="string | null" %}
The redirect's deleted datetime.
{% /parameter %}
