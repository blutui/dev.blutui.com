---
title: 'cms_quote'
description: 'The cms_quote function is used to define a slot for CMS driven blockquote content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_quote('quote') }}
```

**cms_quote** will output:

```html {% process=false %}
<blockquote>
  <p>{{ data.value | raw }}</p>
  <footer>
    <cite>{{ data.cite | raw }}</cite>
  </footer>
</blockquote>
```
