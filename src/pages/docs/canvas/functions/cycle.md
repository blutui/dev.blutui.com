---
title: 'cycle'
description: 'The cycle function cycles on an array of values.'
---

```canvas {% process=false %}
{% set start_year = date() | date('Y') %}
{% set end_year = start_year + 5 %}

{% for year in start_year..end_year %}
  {{ cycle(['odd', 'even'], loop.index0) }}
{% endfor %}
```

The array can contain any number of values:

```canvas {% process=false %}
{% set fruits = ['apple', 'orange', 'citrus'] %}

{% for i in 0..10 %}
  {{ cycle(fruits, i) }}
{% endfor %}
```

## Arguments

Argument   | Description        | Type
---------- | ------------------ | ----
`position` | The cycle position | Any
