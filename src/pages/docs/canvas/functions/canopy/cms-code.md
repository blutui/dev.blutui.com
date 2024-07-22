---
title: 'cms_code'
description: 'The cms_code function is used to define a code component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_code(name, { value: '...', class: '...' }) }}
```

| Argument           | Description                                                       | Data Type |
| :----------------- | :---------------------------------------------------------------- | --------: |
| `name`             | The element identifier                                            |    String |
| `value` (optional) | The code to be displayed                                          |    String |
| `class` (optional) | A space-separated list of CSS classes to style the code component |    String |

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Code component template

```canvas {% process=false %}
<code class={{ class }}>
  <pre>{{ value }}</pre>
</code>
```

#### Rendered HTML output

```html {% process=false %}
<code class="text-sm">
  <pre>
  function greet() {
      console.log("Hello, World!");
  }
  greet();
  </pre>
</code>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
 {{ cms_code('mycode', { value: 'function greet() {\n    console.log("Hello, World!");\n}\ngreet();', class: 'text-sm' }) }}
```

```html {% process=false filename="Output" %}
<code class="text-sm">
  <pre>
  function greet() {
      console.log("Hello, World!");
  }
  greet();
  </pre>
</code>
```

{% /code-group %}
