---
title: 'cms_button'
description: 'The cms_button function is used to define a slot for CMS driven button content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_button('cta-hero') }}
```

**cms_button** will output:

```html {% process=false %}
{% if data.url %}
  <a href="{{ data.url }}" rel="noopener" class="btn {{ data.theme }} {{ data.size }}" {% if data.opens_new_tab %}target="_blank"{% endif %}>
    {{ data.text }}
  </a>
{% else %}
  <button class="btn {{ data.theme }} {{ data.size }}">
    {{ data.text }}
  </button>
{% endif %}
```

## class

`class: string`

You can specify the class element directly on the `<button>` or `<a>` tag.

```canvas {% process=false %}
{{ cms_button('cta-hero',{ class:'w-full' }) }}
```

This will output:

```html {% process=false %}
{% if data.url %}
  <a href="{{ data.url }}" rel="noopener" class="btn {{ data.theme }} {{ data.size }} w-full" {% if data.opens_new_tab %}target="_blank"{% endif %}>
    {{ data.text }}
  </a>
{% else %}
  <button class="btn {{ data.theme }} {{ data.size }} w-full">
    {{ data.text }}
  </button>
{% endif %}
```

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are in the Canopy editor.
{% /callout %}


## theme and size

`theme: string` `size: string` 

You can specify the class element directly on the `<button>` or `<a>` tag.

```canvas {% process=false %}
{{ cms_button('cta-hero',{ theme:'btn-primary', size:'btn-lg' }) }}
```

This will output:

```html {% process=false %}
{% if data.url %}
  <a href="{{ data.url }}" rel="noopener" class="btn btn-primary btn-lg {{ class }}" {% if data.opens_new_tab %}target="_blank"{% endif %}>
    {{ data.text }}
  </a>
{% else %}
  <button class="btn btn-primary btn-lg {{ class }}">
    {{ data.text }}
  </button>
{% endif %}
```

## text

`text: string` 

You can specify the text directly in the `<button>` or `<a>` tag.

```canvas {% process=false %}
{{ cms_button('cta-hero',{ text:'Get in touch' }) }}
```

This will output:

```html {% process=false %}
{% if data.url %}
  <a href="{{ data.url }}" rel="noopener" class="btn {{ data.theme }} {{ data.size }}" {% if data.opens_new_tab %}target="_blank"{% endif %}>
    Get in touch
  </a>
{% else %}
  <button class="btn {{ data.theme }} {{ data.size }}">
     Get in touch
  </button>
{% endif %}
```

## url

`url: string` 

You can specify the href element directly on the `<a>` tag.

```canvas {% process=false %}
{{ cms_button('cta-hero',{ url:'https://dev.blutui.com/docs/canvas/functions/cms-button' }) }}
```

This will output:

```html {% process=false %}
  <a href="https://dev.blutui.com/docs/canvas/functions/cms-button" rel="noopener" class="btn {{ data.theme }} {{ data.size }}" {% if data.opens_new_tab %}target="_blank"{% endif %}>
    {{ data.text }}
  </a>
```

## opens_new_tab

`opens_new_tab: boolean` 

You can specify the if target="_blank" element directly on the `<a>` tag.

```canvas {% process=false %}
{{ cms_button('cta-hero',{ opens_new_tab:'true' }) }}
```

This will output:

```html {% process=false %}
  <a href="{{ data.url }}" rel="noopener" class="btn {{ data.theme }} {{ data.size }} {{ class }}" target="_blank">
    {{ data.text }}
  </a>
```
{% callout type="note" %}
The `opens_new_tab` only works if you are using a `url`.
{% /callout %}


