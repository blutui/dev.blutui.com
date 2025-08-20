---
title: 'format'
description: 'The format filter formats a given string by replacing the placeholders.'
---

```canvas {% process=false %}
{{ 'I like %s and %s.' | format(foo, 'bar') }}

{# outputs I like foo and bar
  if the foo parameter equals to the foo string. #}
```
