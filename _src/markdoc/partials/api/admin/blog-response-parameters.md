{% parameter name="id" type="string" %}
The unique identifier for this blog.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `blog` for this endpoint.
{% /parameter %}

{% parameter name="name" type="string" %}
The name of this blog.
{% /parameter %}

{% parameter name="slug" type="string" %}
The unique slug for this blog.
{% /parameter %}

{% parameter name="uri" type="string" %}
The URL used to view all posts that belong to this blog.
{% /parameter %}

{% parameter name="layout" type="string" %}
The layout used to display all blog posts.
{% /parameter %}

{% parameter name="post_layout" type="string" %}
The layout used to display a single post in this blog.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the blog was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the blog was updated.
{% /parameter %}
