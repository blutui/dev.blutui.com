---
title: 'last'
description: 'The last filter returns the last "element" of a sequence, a mapping, or a string.'
---

```canvas {% process=false %}
{{ [1, 2, 3, 4] | last }}
{# outputs 4 #}

{{ { a: 1, b: 2, c: 3, d: 4 } | last }}
{# outputs 4 #}

{{ '1234' | last }}
{# outputs 4 #}
```
