---
title: 'cms_image'
description: 'The cms_image function is used to define a slot for CMS driven image content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_image('hero-image') }}
```

**cms_image** will output:

```html {% process=false %}
<img src="{{ data.url }}" alt="{{ data.alt_text }}" />
```
