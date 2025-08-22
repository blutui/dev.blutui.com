---
title: 'cms_image'
description: 'The cms_image function is used to define a image component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_image(name, { url: '...', alt_text: '...', class: '...'}) }}
```

| Argument              | Description                                                        | Data Type |
| :-------------------- | :----------------------------------------------------------------- | --------: |
| `name`                | The element identifier                                             |    String |
| `url` (optional)      | Link to an image to display                                        |    String |
| `alt_text` (optional) | Descriptive text for accessibility and SEO                         |    String |
| `class` (optional)    | A space-separated list of CSS classes to style the image component |    String |

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Image component template

```canvas {% process=false %}
<img src={{ url }} alt={{ alt_text }} class={{ class }} />
```

#### Rendered HTML output

```html {% process=false %}
<img
  src="https://placehold.co/300x200"
  alt="Placeholder Image"
  class="rounded-lg shadow-lg"
/>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_image('myimage', { url: 'https://placehold.co/300x200', alt_text: 'Placeholder Image', class: 'rounded-lg shadow-lg' }) }}
```

```html {% process=false filename="Output" %}
<img
  src="https://placehold.co/300x200"
  alt="Placeholder Image"
  class="rounded-lg shadow-lg"
/>
```

{% /code-group %}
