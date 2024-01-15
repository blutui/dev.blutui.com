---
title: 'cms_heading'
description: 'The cms_heading function is used to define a slot for CMS driven heading content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_heading('hero-video') }}
```

**cms_heading** will output:

```canvas {% process=false %}
<{{ data.element }}>
  {{ data.value }}
</{{ data.element }}>

{# Example output: #}
<h2>
  {{ data.value }}
</h2>
```
