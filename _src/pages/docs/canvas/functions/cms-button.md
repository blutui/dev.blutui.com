---
title: 'cms_button'
description: 'The cms_button function is used to define a slot for CMS driven button content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_button('cta-hero') }}
```

**cms_button** will output:

```html {% process=false %}
{% if data.url %}
  <a href="{{ data.url }}" rel="noopener" class="btn {{ data.theme }} {{ data.size }}" {% if data.opens_new_tab %}target="_blank"{% endif %}>
    {{ data.text }}
  </a>
{% else %}
  <button class="btn {{ data.theme }} {{ data.size }}">
    {{ data.text }}
  </button>
{% endif %}
```
