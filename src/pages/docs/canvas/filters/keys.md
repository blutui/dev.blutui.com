---
title: 'keys'
description: 'The keys filter returns the keys of an array.'
---

It is useful when you want to iterate over the keys of an array:

```canvas {% process=false %}
{% for key in array | keys %}
  ...
{% endfor %}
```
