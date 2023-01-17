---
title: 'cms_audio'
description: 'The cms_audio function is used to define a slot for CMS driven audio content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_audio('artist-1') }}
```

**cms_audio** will output:

```html {% process=false %}
<audio controls="{{ data.controls }}">
  {% for source in data.sources %}
    <source src="{{ source.url }}" type="{{ source.type }}">
  {% endfor %}

  Your browser does not support the audio tag.
</audio>
```
