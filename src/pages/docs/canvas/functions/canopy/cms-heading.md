---
title: 'cms_heading'
description: 'The cms_heading function is used to define a heading component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_heading(name, { element:'...', value:'...', class:'...' }) }}
```

| Argument             | Description                                                          | Data Type |
| :------------------- | :------------------------------------------------------------------- | --------: |
| `name`               | The element identifier                                               |    String |
| `element` (optional) | The HTML element type of the heading **(h1, h2, h3, h4, h5, or h6)** |    String |
| `value` (optional)   | The text content to be displayed within the heading                  |    String |
| `class` (optional)   | A space-separated list of CSS classes to style the heading component |    String |

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Heading component template

```canvas {% process=false %}
<{{ element }} class={{class}}>
  {{ value }}
</{{ element }}>
```

#### Rendered HTML output

```html {% process=false %}
<h2 class="bg-white">String passed in value</h2>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_heading('myheading', { element:'h3', value:'Welcome to our page', class:'text-blue-500 font-bold' }) }}
```

```html {% process=false filename="Output" %}
<h3 class="font-bold text-blue-500">Welcome to our page</h3>
```

{% /code-group %}
