---
title: 'cms_audio'
description: 'The cms_audio function is used to define a slot for CMS driven audio content, editable using Blutui Canopy.'
---

```canvas {% process=false %}
{{ cms_audio('artist-1') }}
```

**cms_audio** will output:

```html {% process=false %}
<audio controls class="{{ class }}">
  {% for source in data.sources %}
    <source src="{{ source.url }}" type="{{ source.type }}">
  {% endfor %}

  Your browser does not support the audio tag.
</audio>
```

## Class

`Class: string`

You can specify the style element directly on the `<audio>` tag.

```canvas {% process=false %}
{{ cms_audio('artist-1',{ class:'w-full' }) }}
```

This will output:

```html {% process=false %}
<audio controls class="w-full">
  {% for source in data.sources %}
    <source src="{{ source.url }}" type="{{ source.type }}">
  {% endfor %}

  Your browser does not support the audio tag.
</audio>
```

## Sources

`sources: array`

You can specify each source attribute directly. `sources` is an array of objects which has two variables. `url` which is for the src attribute and `type` which is for the type attribute

```canvas {% process=false %}
{{ cms_audio('artist-1', {sources:[{ url:'audio-1.mp3', type:'audio/mp3' },{ url:'audio-1.mp4', type:'audio/mp4' }]}) }}
```

This will output:

```html {% process=false %}
<audio controls class="{{ class }}">
  <source src="audio-1.mp3" type="audio/mp3">
  <source src="audio-1.mp4" type="audio/mp4">

  Your browser does not support the audio tag.
</audio>
```
