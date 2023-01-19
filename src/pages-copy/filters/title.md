---
title: 'title'
description: 'The title filter returns a titlecased version of the value.'
---

Words will start with uppercase letters, all remaining characters are lowercase:

```canvas {% process=false %}
{{ 'my first car' | title }}

{# outputs 'My First Car' #}
```
