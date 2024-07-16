---
title: 'cms_embed'
description: 'The cms_embed function is used to define a slot for CMS driven embed content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_embed('hero-video') }}
```

**cms_embed** will output:

```html {% process=false %}
<embed type="{{ data.type }}" src="{{ data.src }}">
```

## class

`class: string`

You can specify the class element directly on the `<embed>` tag.

```canvas {% process=false %}
{{ cms_embed('hero-video', { class:'w-full' }) }}
```

This will output:

```html {% process=false %}
<embed type="{{ data.type }}" src="{{ data.src }}" class="w-full">
```

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are in the Canopy editor.
{% /callout %}


## type

`type: string `

You can specify the type inside the `<embed>` tag.

```canvas {% process=false %}
{{ cms_embed('hero-video', { type:'video/webm' }) }}
```

This will output:

```html {% process=false %}
<embed type="video/webm" src="{{ data.src }}" >
```

## src

`src: string `

You can specify the src inside the `<embed>` tag.

```canvas {% process=false %}
{{ cms_embed('hero-video', { src:'https://cdn.blutui.com/uploads/assets/video.webm' }) }}
```

This will output:

```html {% process=false %}
<embed type="{{ data.type }}" src="https://cdn.blutui.com/uploads/assets/video.webm" >
```

