---
title: 'cms_embed'
description: 'The cms_embed function is used to define a slot for CMS driven embed content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_embed('hero-video') }}
```

**cms_embed** will output:

```html {% process=false %}
<embed type="{{ data.type }}" src="{{ data.src }}">
```
