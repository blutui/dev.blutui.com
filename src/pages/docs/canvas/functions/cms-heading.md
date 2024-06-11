---
title: 'cms_heading'
description: 'The cms_heading function is used to define a slot for CMS driven heading content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_heading('hero-title') }}
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

## class

`class: string`

You can specify the class element directly on the differnt heading tag.

```canvas {% process=false %}
{{ cms_heading('hero-title', { class:'w-full text-3xl' }) }}
```

This will output:

```html {% process=false %}
<h2 class="w-full text-3xl">
  {{ data.value }}
</h2>
```

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are in the Canopy editor.
{% /callout %}


## element

`element: string`

You can specify what element you want to use

```canvas {% process=false %}
{{ cms_heading('hero-title', { element:'h1' }) }}
```

This will output:

```html {% process=false %}
<h1>
  {{ data.value }}
</h1>
```

## value

`value: string `

You can specify the content inside the heading

```canvas {% process=false %}
{{ cms_heading('hero-title', { value:'Welcome to our site' }) }}
```

This will output:

```html {% process=false %}
<h2>
  Welcome to our site
</h2>
```


