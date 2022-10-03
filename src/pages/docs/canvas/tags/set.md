---
title: 'set'
---

In your Canvas templates you can also assign values to variables. Assignments use the `set` tag and can have multiple targets. Here is how you can assign the `bar` value to the `foo` variable:

```twig {% process=false %}
{% set foo = 'bar' %}
```

After the `set` call, the `foo` variable is avilable in the template like any other variables:

```twig {% process=false %}
{{ foo }} {# Returns: bar #}
```

The assigned value can be any valid expression:

```twig {% process=false %}
{% set foo = [1, 2] %}
{% set foo = { 'foo': 'bar' } %}
{% set foo = 'foo' ~ 'bar' %}
```

Serveral variables can also be assigned in one block:

```twig {% process=false %}
{% set foo, bar = 'foo', 'bar' %}

{# is equivalent to #}

{% set foo = 'foo' %}
{% set bar = 'bar' %}
```

Note that loops are scoped, therefore a variable declared inside a [**for**](/docs/canvas/tags/for) loop is not accessible outside the loop itself:

```twig {% process=false %}
{% for item in list %}
  {% set foo = item %}
{% endfor %}

{# foo is NOT available #}
```

If you want to access the variable, just declare it before the loop:

```twig {% process=false %}
{% set foo = '' %}
{% for item in list %}
  {% set foo = item %}
{% endfor %}

{# foo is available #}
```
