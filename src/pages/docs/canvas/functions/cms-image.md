---
title: 'cms_image'
description: 'The cms_image function is used to define a slot for CMS driven image content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_image('hero-image') }}
```

**cms_image** will output:

```html {% process=false %}
<img src="{{ data.url }}" alt="{{ data.alt_text }}" />
```

## class

`class: string`

You can specify the class element directly on the `<img>` tag.

```canvas {% process=false %}
{{ cms_image('hero-image',{ class:'w-full' }) }}
```

This will output:

```html {% process=false %}
<img src="{{ data.url }}" alt="{{ data.alt_text }}" class="w-full" />
```

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are in the Canopy editor.
{% /callout %}


## url

`url: string `

You can specify the src inside the `<img>` tag.

```canvas {% process=false %}
{{ cms_image('hero-image') }}
```

This will output:

```html {% process=false %}
<img src="{{ data.url }}" alt="{{ data.alt_text }}" />
```

## src

`src: string `

You can specify the src inside the `<embed>` tag.

```canvas {% process=false %}
{{ cms_image('hero-image') }}
```

This will output:

```html {% process=false %}
<img src="{{ data.url }}" alt="{{ data.alt_text }}" />
```pe="{{ data.type }}" src="https://cdn.blutui.com/uploads/assets/video.webm" >
```
