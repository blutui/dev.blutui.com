---
title: 'cms_button'
description: 'The cms_button function is used to define a slot for CMS driven button content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_button(name, { text:'...', url:'...', class:'...', opens_new_tab:... }) }}
```

| Argument                   | Description                                                          | Data Type |
| :------------------------- | :------------------------------------------------------------------- | --------: |
| `name`                     | The element identifier                                               |    String |
| `text` (optional)          | The text content to be displayed within the button                   |    String |
| `url` (optional)           | The button URL                                                       |    String |
| `class` (optional)         | A space-separated list of CSS classes to style the heading component |    String |
| `opens_new_tab` (optional) | Set to true to open the linked URL in a new tab                      |   Boolean |

{% callout type="note" %}
The `opens_new_tab` only works if you are using a `url`.
{% /callout %}

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Button component template

```canvas {% process=false %}
    <a href="{{ url }}" class={{ class }} rel="noopener" {% if opens_new_tab %} target="_blank" {% endif %}>
      {{ text }}
    </a>
```

#### Rendered HTML output

```html {% process=false %}
<a href="https://blutui.ai/" class="bg-pink-500" rel="noopener" target="_blank">
  Blutui AI
</a>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_button('mybutton', { text:'Blutui AI Components', url:'https://blutui.ai/', class:'bg-blue-500 text-white rounded hover:bg-blue-700',  opens_new_tab:true }) }}
```

```html {% process=false filename="Output" %}
<a
  href="https://blutui.ai/"
  class="rounded bg-blue-500 text-white hover:bg-blue-700"
  rel="noopener"
  target="_blank"
>
  Blutui AI Components
</a>
```

{% /code-group %}
