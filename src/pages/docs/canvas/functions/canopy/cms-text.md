---
title: 'cms_text'
description: 'The cms_text function is used to define a slot for CMS driven text content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_text('hero-content') }}
```

**cms_text** will output:

```html {% process=false %}
<div>
  {{ data.value | raw }}
</div>
```
