---
title: Templating
---

## Control structure

A control structure refers to all those things that control the flow of a program - conditionals (i.e. [if/elseif/else](/docs/canvas/tags/if)), [for](/docs/canvas/tags/for) loops, as well as things like blocks. Control structures appear inside `{% ... %}` blocks.

For example, to display a list of users provided in a variable called `users`, use the [for](/docs/canvas/tags/for) tag:

```canvas {% process=false %}
<h1>Members</h1>
<ul>
  {% for user in users %}
    <li>{{ user.username | e }}</li>
  {% endfor %}
</ul>
```

The [if](/docs/canvas/tags/if) tag can be used to test an expression:

```canvas {% process=false %}
{% if users | length > 0 %}
  <ul>
    {% for user in users %}
      <li>{{ user.username | e }}</li>
    {% endfor %}
  </ul>
{% endif %}
```

## Comments

To comment-out part of a line in a template, use the comment syntax `{# ... #}`. This is useful for debugging or to add information for other template designers or yourself:

```canvas {% process=false %}
{# note: disabled template because we no longer use this
  {% for user in users %}
    ...
  {% endfor %}
#}
```

## Including other templates

The [include](/docs/canvas/functions/include) function is useful to include a template and return the rendered content of that template into the current one:

```canvas {% process=false %}
{{ include('sidebar.html') }}
```

By default, included templates have access to the same context as the template which includes them. This means that any variable defined in the main template will be available in the included template too:

```canvas {% process=false %}
{% for box in boxes %}
  {{ include('render_box.html') }}
{% endfor %}
```

The included template **render_box.html** is able to access the **box** variable.

You can access templates in subdirectories with a slash:

```canvas {% process=false %}
{{ include('sections/articles/sidebar.html') }}
```

You can access templates relative to the **views** folder in your project directory.

## Template inheritance

The most powerful part of Canvas is template inheritance. Template inheritance allows you to build a base "skeleton" template that contains all the common elements of your site and defines **blocks** that child templates can override.

It's easier to understand the concept by starting with an example.

Let's define a base template, **base.html**, which defines an HTML skeleton document that might be used for a two-column page:

```canvas {% process=false filename="base.html" %}
<!DOCTYPE html>
<html>
  <head>
    {% block head %}
      <link rel="stylesheet" href="style.css" />
      <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
  </head>

  <body>
    <div id="content">{% block content %}{% endblock %}</div>
    <div id="footer">
      {% block footer %}
        &copy; Copyright 2011 by <a href="http://domain.invalid/">you</a>.
      {% endblock %}
    </div>
  </body>
</html>
```

In this example, the [block](/docs/canvas/tags/block) tags define four blocks that child templates can fill in. All the `block` tag does is to tell the template engine that a child template may override those portions of the template.

A child template might look like this:

```canvas {% process=false filename="index.html" %}
{% extends 'base.html' %}

{% block title %}Index{% endblock %}

{% block head %}
  {{ parent() }}
  <style type="text/css">
    .important { color: #336699; }
  </style>
{% endblock %}

{% block content %}
  <h1>Index</h1>
  <p class="important">
    Welcome to my awesome homepage.
  </p>
{% endblock %}
```

The [extends](/docs/canvas/tags/extends) tag is the key here. It tells the template engine that this template "extends" another template. When the template system evaluates this template, first it locates the parent. The extends tag should be the first tag in the template.

Note that since the child template doesn't define the **footer** block, the value from the parent template is used instead.

It's possible to render the contents of the parent block by using the [parent](/docs/canvas/functions/parent) function. This gives back the results of the parent block:

```canvas {% process=false %}
{% block sidebar %}
  <h3>Table Of Contents</h3>
  ...
  {{ parent() }}
{% endblock %}
```

The documentation page for the [extends](/docs/canvas/tags/extends) tag describes more advanced features like block nesting, scope, dynamic inheritance, and conditional inheritance.

Canvas also supports multiple inheritance via "horizontal reuse" with the help of the [use](/docs/canvas/tags/use) tag.

## HTML escaping

When generating HTML from templates, there's always a risk that a variable will include characters that affect the resulting HTML. There are two approaches: manually escaping each variable or automatically escaping everything by default.

Canvas supports both, automatic escaping is enabled by default.

The automatic escaping strategy can be configured via the [autoescape](/docs/canvas/tags/autoescape) tag and defaults to **html**.

For bigger sections it makes sense to mark a block [verbatim](/docs/canvas/tags/verbatim).

## Macros

Macros are comparable with functions in regular programming languages. They are useful to reuse HTML fragments to not repeat yourself. They are described in the [macro](/docs/canvas/tags/macro) tag documentation.

## Whitespace control

The first newline after a template tag is removed automatically. Whitespace is not further modified by the template engine, so each whitespace (spaces, tabs, newlines etc.) is returned unchanged.

You can also control whitespace on a per tag level. By using the whitespace control modifiers on your tags, you can trim leading and or trailing whitespace.

Canvas supports two modifiers:

- _Whitespace trimming_ via the **-** modifier: Removes all whitespace (including newlines);
- _Line whitespace trimming_ via the **~** modifier: Removes all whitespace (excluding newlines). Using this modifier on the right disables the default removal of the first newline inherited.

The modifiers can be used on either side of the tags like in `{%-` or `-%}` and they consume all whitespace for that side of the tag. It is possible to use the modifiers on one side of a tag or on both sides:

```canvas {% process=false %}
{% set value = 'no spaces' %}
{#- No leading/trailing whitespace -#}
{%- if true -%}
  {{- value -}}
{%- endif -%}
{# output 'no spaces' #}

<li>
  {{ value }}    </li>
{# outputs '<li>\\n    no spaces    </li>' #}

<li>
  {{- value }}    </li>
{# outputs '<li>no spaces    </li>' #}

<li>
  {{~ value }}    </li>
{# outputs '<li>\\nno spaces    </li>' #}
```

In addition to the whitespace modifiers, Canvas also has a [spaceless](/docs/canvas/filters/spaceless) filter that removes whitespace **between HTML tags**:

```canvas {% process=false %}
{% apply spaceless %}
  <div>
    <strong>foo bar</strong>
  </div>
{% endapply %}

{# output will be <div><strong>foo bar</strong></div> #}
```

{% callout type="note" %}
Ensure that you run `courier push` after each update, to view your changes in the staging environment.
{% /callout %}
