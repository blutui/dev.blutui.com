---
title: 'cms_quote'
description: 'The cms_quote function is used to define a quote component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_quote(name, { value: '...', cite: '...', class: '...' }) }}
```

| Argument           | Description                                                        | Data Type |
| :----------------- | :----------------------------------------------------------------- | --------: |
| `name`             | The element identifier                                             |    String |
| `value` (optional) | The text content of the quotation                                  |    String |
| `cite` (optional)  | Reference information for the quote (author, source, etc.)         |    String |
| `class` (optional) | A space-separated list of CSS classes to style the quote component |    String |

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Quote component template

```canvas {% process=false %}
<blockquote class={{ class }}>
  <p>{{ value }}</p>
  <footer>
    <cite>{{ cite }}</cite>
  </footer>
</blockquote>
```

#### Rendered HTML output

```html {% process=false %}
<blockquote class="bg-pink">
  "There's no place like home."
  <footer>
    <cite>"Dorothy"</cite>
  </footer>
</blockquote>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
 {{ cms_quote('myquote', { value: "I'll be back.", cite: 'Terminator', class: 'text-lg italic text-gray-600' }) }}
```

```html {% process=false filename="Output" %}
<blockquote class="text-lg italic text-gray-600">
  I'll be back.
  <footer>
    <cite>Terminator</cite>
  </footer>
</blockquote>
```

{% /code-group %}
