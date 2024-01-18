---
title: 'image_url'
description: 'The image_url filter generates a CDN URL for an image.'
---

You can use the `image_url` filter on any image URL:

```canvas {% process=false %}
{{ entry.image | image_url }}
{# outputs: https://cdn.blutui.com/uploads/project_name/image.png #}
```

{% callout type="note" %}
Custom `width` and `height` dimensions can never be resized to be larger than the original dimensions of the image.
{% /callout %}

## width

You can specify the width of the image. If you only specify the width, then the height is automatically calculated based on the image's dimensions:

```canvas {% process=false %}
{{ entry.image | image_url(width = 280) }}
{# outputs: https://cdn.blutui.com/uploads/project_name/image.png?width=280 #}
```

## height

You can specify the height of the image. If you only specify the height, then the width is automatically calculated based on the image's dimensions:

```canvas {% process=false %}
{{ entry.image | image_url(height = 280) }}
{# outputs: https://cdn.blutui.com/uploads/project_name/image.png?height=280 #}
```

## format

You can specify the file format to use for the image:

```canvas {% process=false %}
{{ entry.image | image_url(width = 280, format = 'webp') }}
{# outputs: https://cdn.blutui.com/uploads/project_name/image.png?format=webp&width=280 #}
```
