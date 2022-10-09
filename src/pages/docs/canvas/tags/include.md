---
title: 'include'
---

The **include** statement includes a template and returns the rendered content of that file:

```twig {% process=false %}
{% include 'header.canvas' %}
  Body
{% include 'footer.canvas' %}
```

It is recommended to use the [include](/docs/canvas/functions/include) function instead as it provides the same features with a bit more flexibility:

- The [include](/docs/canvas/functions/include) function is semantically more "correct" (including a template outputs its rendered contents in the current scope; a tag should not display anything);
- The include function is more "composable":

```twig {% process=false %}
{# Store a rendered template in a variable #}
{% set content %}
  {% include 'template.canvas' %}
{% endset %}
{# vs #}
{% set content = include('template.canvas') %}

{# Filter a rendered template #}
{% filter upper %}
  {% include 'template.canvas' %}
{% endfilter %}
{# vs #}
{{ include('template.canvas') | upper }}
```

- The [include](/docs/canvas/functions/include) function does not impose any specific order for arguments thanks to named arguments.

Included templates have access to the variables of the active context. You can add additional variables by passing them after the `with` keyword:

```twig {% process=false %}
{# template.canvas will have access to the variables from the current context and the additional ones provided #}
{% include 'template.canvas' with { 'foo': 'bar' } %}

{% set vars = { 'foo': 'bar' } %}
{% include 'template.canvas' with vars %}
```

You can disable access to the context by appending the `only` keyword:

```twig {% process=false %}
{# only the foo variable will be accessible #}
{% include 'template.canvas' with { 'foo': 'bar' } only %}
```

```twig {% process=false %}
{# no variables will be accessible #}
{% include 'template.canvas' only %}
```

The template name can be any valid Canvas expression:

```twig {% process=false %}
{% include some_var %}
{% include ajax ? 'ajax.canvas' : 'not_ajax.canvas' %}
```

You can mark an include with `ignore missing` in which case Canvas will ignore the statement if the template to be included does not exist. It has to be placed just after the template name. Here are some valid examples:

```twig {% process=false %}
{% include 'sidebar.canvas' ignore missing %}
{% include 'sidebar.canvas' ignore missing with { 'foo': 'bar' } %}
{% include 'sidebar.canvas' ignore missing only %}
```

You can also provide a list of templates that are checked for existence before inclusion. The first template that exists will be included:

```twig {% process=false %}
{% include ['page_detailed.canvas', 'page.canvas'] %}
```

If `ignore missing` is given, it will fall back to rendering nothing if none of the templates exist, otherwise it will throw an exception.
