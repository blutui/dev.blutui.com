---
title: 'Filters & Functions'
---

## Filters

Variables can be modified by **filters**. Filters are separated from the variable by a pipe symbol (`|`). Multiple filters can be chained. The output of one filter is applied to the next.

The following example removes all HTML tags from the `name` and title-cases it:

```canvas {% process=false %}
{{ name | striptags | title }}
```

Filters that accept arguments have parentheses around the arguments. This example joins the elements of a list by commas:

```canvas {% process=false %}
{{ list | join(', ') }}
```

To apply a filter on a section of code, wrap it with the [apply](/docs/canvas/tags/apply) tag:

```canvas {% process=false %}
{% apply upper %}
  This text becomes uppercase
{% endapply %}
```

Go to the [filters](/docs/canvas/filters) page to learn more about the available filters.

## Functions

Functions can be called to generate content. Functions are called by their name followed by parentheses (`()`) and may have arguments.

For instance, the `range` function returns a list containing an arithmetic progression of integers:

```canvas {% process=false %}
{% for i in range(0, 3) %}
  {{ i }},
{% endfor %}
```

Go to the [functions](/docs/canvas/functions) page to learn more about the available functions.

### Named arguments

```canvas {% process=false %}
{% for i in range(low = 1, high = 10, step = 2) %}
  {{ i }},
{% endfor %}
```

Using named arguments makes your templates more explicit about the meaning of the values you pass as arguments:

```canvas {% process=false %}
{{ data | convert_encoding('UTF-8', 'iso-2022-jp') }}

{# versus #}

{{ data | convert_encoding(from = 'iso-2022-jp', to = 'UTF-8') }}
```

Named arguments also allow you to skip some arguments for which you don't want to change the default value:

```canvas {% process=false %}
{# the first argument is the date format, which defaults to the global date format if null is passed #}
{{ 'now' | date(null, 'Europe/Paris') }}

{# or skip the format value by using a named argument for the time zone #}
{{ 'now' | date(timezone = 'Europe/Paris') }}
```

You can also use both positional and named arguments in one call, in which case positional arguments must always come before named arguments:

```canvas {% process=false %}
{{ 'now' | date('d/m/Y H:i', timezone = 'Europe/Paris') }}
```

Each function and filter documentation page has a section where the names of all arguments are listed when supported.

{% callout type="note" %}
Ensure that you run `courier push` after each update, to view your changes in the staging environment.
{% /callout %}
