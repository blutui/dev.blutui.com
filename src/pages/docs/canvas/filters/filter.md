---
title: 'filter'
description: 'The filter filter filters elements of a sequence or a mapping using an arrow function.'
---

```canvas {% process=false %}
{% set sizes = [34, 36, 38, 40, 42] %}

{{ sizes | filter(v => v > 38) | join(', ') }}
{# output 40, 42 #}
```

Combined with the [for](/docs/canvas/tags/for) tag, it allows to filter the items to iterate over:

```canvas {% process=false %}
{% for v in sizes | filter(v => v > 38) -%}
  {{ v }}
{% endfor %}
{# output 40 42 #}
```

It also works with mappings:

```canvas {% process=false %}
{% set sizes = {
  xs: 34,
  s:  36,
  m:  38,
  l:  40,
  xl: 42,
} %}

{% for k, v in sizes | filter(v => v > 38) -%}
  {{ k }} = {{ v }}
{% endfor %}
{# output l = 40 xl = 42 #}
```

The arrow function also receives the key as a second argument:

```canvas {% process=false %}
{% for k, v in sizes | filter((v, k) => v > 38 and k != "xl") -%}
  {{ k }} = {{ v }}
{% endfor %}
{# output l = 40 #}
```

Note that the arrow function has access to the current context.

## Arguments

Argument | Description             | Type
-------- | ----------------------- | --------
`array`  | The sequence or mapping | Array
`arrow`  | The arrow function      | Function
