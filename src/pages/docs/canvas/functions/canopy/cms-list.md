---
title: 'cms_list'
description: 'The cms_list function is used to define a list component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_list(name, { ordered: ..., items: [ '...', '...' ], class: '...' }) }}
```

| Argument             | Description                                                       |     Data Type |
| :------------------- | :---------------------------------------------------------------- | ------------: |
| `name`               | The element identifier                                            |        String |
| `ordered` (optional) | Set ordered list or unordered list                                |       Boolean |
| `items` (optional)   | Array containing the content of each list item                    | Array[String] |
| `class` (optional)   | A space-separated list of CSS classes to style the list component |        String |

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### List component template

```canvas {% process=false %}
<{{ ordered ? 'ol' : 'ul' }} class={{ class }}>
  {% for item in items %}
    <li>{{ item }}</li>
  {% endfor %}
</{{ ordered ? 'ol' : 'ul' }}>
```

#### Rendered HTML output

```html {% process=false %}
<ol class="bg-pink">
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_list('list-tag-123', { ordered: true, items: [ 'Item 1', 'Item 2', 'Item 3' ], class: 'list-decimal pl-5 space-y-2' }) }}
```

```html {% process=false filename="Output" %}
<ol class="list-decimal space-y-2 pl-5">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

{% /code-group %}
