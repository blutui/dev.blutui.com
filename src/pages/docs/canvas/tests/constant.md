---
title: 'constant'
description: 'The constant test checks if a variable has the exact same value as a constant.'
---

You can use either global constants or class constants:

```canvas {% process=false %}
{% if post.status is constant('Post::PUBLISHED') %}
  the status attribute is exactly the same as Post::PUBLISHED
{% endif %}
```

You can test constants from object instances as well:

```canvas {% process=false %}
{% if post.status is constant('PUBLISHED', post) %}
  the status attribute is exactly the same as Post::PUBLISHED
{% endif %}
```
