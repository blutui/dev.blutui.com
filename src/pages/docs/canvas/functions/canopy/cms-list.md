---
title: 'cms_list'
description: 'The cms_list function is used to define a slot for CMS driven list content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_list('shopping-list') }}
```

**cms_list** will output:

```canvas {% process=false %}
<{{ data.ordered ? 'ol' : 'ul' }}>
  {% for item in data.items %}
    <li>{{ item }}</li>
  {% endfor %}
</{{ data.ordered ? 'ol' : 'ul' }}>
```
