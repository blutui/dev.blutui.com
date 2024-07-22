---
title: 'cms_text'
description: 'The cms_text function is used to define a text component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_text(name, { value: '...', class: '...' }) }}
```

| Argument           | Description                                                       | Data Type |
| :----------------- | :---------------------------------------------------------------- | --------: |
| `name`             | The element identifier                                            |    String |
| `value` (optional) | The text content to be displayed within the text component        |    String |
| `class` (optional) | A space-separated list of CSS classes to style the text component |    String |

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Text component template

```canvas {% process=false %}
<div class={{ class }}>
    {{ value }}
</div>
```

#### Rendered HTML output

```html {% process=false %}
<div class="text-purple-500">String passed in value</div>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_text('mytextcontent', { value: 'Blutui is pro-developer in everything we do', class: 'font-medium text-purple-500' }) }}
```

```html {% process=false filename="Output" %}
<div class="font-medium text-purple-500">
  Blutui is pro-developer in everything we do
</div>
```

{% /code-group %}
