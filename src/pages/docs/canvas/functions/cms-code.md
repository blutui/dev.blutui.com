---
title: 'cms_code'
description: 'The cms_code function is used to define a slot for CMS driven code content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_code('example-code') }}
```

**cms_code** will output:

```html {% process=false %}
<code>
  <pre>{{ data.value }}</pre>
</code>
```
