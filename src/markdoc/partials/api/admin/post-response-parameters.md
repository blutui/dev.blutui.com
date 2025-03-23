{% parameter name="id" type="string" %}
The unique identifier for this blog post.
{% /parameter %}

{% parameter name="object" type="string" %}
This will always contain `post` for this endpoint.
{% /parameter %}

{% parameter name="title" type="string" %}
The title for the blog post.
{% /parameter %}

{% parameter name="description" type="string" %}
A short description of the blog post.
{% /parameter %}

{% parameter name="content" type="string" %}
The HTML content of the blog post.
{% /parameter %}

{% parameter name="slug" type="string" %}
The unique slug for this blog post.
{% /parameter %}

{% parameter name="author" type="string" %}
The author of the blog post.
{% /parameter %}

{% parameter name="feature_image" type="string" %}
The URL of the featured image.
{% /parameter %}

{% parameter name="blog" type="string | object" %}
The ID of the blog this post belongs to.
{% /parameter %}

{% parameter name="publish_date" type="string" %}
The date and time when the blog post will be published.
{% /parameter %}

{% parameter name="created_at" type="string" %}
The date and time when the blog post was created.
{% /parameter %}

{% parameter name="updated_at" type="string" %}
The date and time when the blog post was updated.
{% /parameter %}
