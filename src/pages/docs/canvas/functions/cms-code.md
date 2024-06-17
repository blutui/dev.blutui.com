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

## class

`class: string`

You can specify the class element directly on the `<code>` tag.

```canvas {% process=false %}
{{ cms_code('example-code', { class:'w-full' }) }}
```

This will output:

```html {% process=false %}
<code class="w-full">
  <pre>{{ data.value }}</pre>
</code>
```

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are in the Canopy editor.
{% /callout %}


## value

`value: string `

You can specify the content inside the `<pre>` tag.

```canvas {% process=false %}
{{ cms_code('example-code', { value:'x = 5;' }) }}
```

This will output:

```html {% process=false %}
<code>
  <pre>x = 5;</pre>
</code>
```
