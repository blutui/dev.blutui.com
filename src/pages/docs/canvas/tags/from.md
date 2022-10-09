---
title: 'from'
---

The `from` tag imports [macro](/docs/canvas/tags/macro) names into the current namespace. The tag is documented in detail in the documentation for the [macro](/docs/canvas/tags/macro) tag.

```twig {% process=false %}
{% from 'forms.canvas' import input as input, textarea %}

<p>{{ input('password', '', 'password') }}</p>
<p>{{ textarea('comment') }}</p>
```
