---
title: 'cms_video'
description: 'The cms_video function is used to define a slot for CMS driven video content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_video('hero') }}
```

**cms_video** will output:

```html {% process=false %}
<video controls="{{ data.controls }}">
  {% for source in data.sources %}
    <source src="{{ source.url }}" type="{{ source.type }}">
  {% endfor %}

  Your browser does not support the video tag.
</video>
```
