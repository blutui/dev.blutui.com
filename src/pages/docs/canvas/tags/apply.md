---
title: 'apply'
---

The **apply** tag allows you to apply Canvas filters on a block of template data:

```canvas {% process=false %}
{% apply upper %}
  This text becomes uppercase
{% endapply %}
```

You can also chain filters and pass arguments to them:

```canvas {% process=false %}
{% apply lower | escape('html') %}
  <strong>SOME TEXT</strong>
{% endapply %}

{# outputs "&lt;strong&gt;some text&lt;/strong&gt;" #}
```
