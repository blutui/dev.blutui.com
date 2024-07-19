---
title: 'cms_video'
description: 'The cms_video function is used to define a video component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_video(name, { controls:..., url:'...', type:'...', class:'...' }) }}
```

| Argument              | Description                                                          | Data Type |
| :-------------------- | :------------------------------------------------------------------- | --------: |
| `name`                | The element identifier                                               |    String |
| `controls` (optional) | Display standard video controls (play, pause, volume, etc.)          |   Boolean |
| `url` (optional)      | Link to the video file                                               |    String |
| `type` (optional)     | Specify the video format (most browsers can handle multiple formats) |    String |
| `class` (optional)    | A space-separated list of CSS classes to style the video component   |    String |

#### Multiple video sources

```canvas {% process=false %}
{{ cms_video(name, { controls:..., sources:[{url:'...', type:'...'},{url:'...', type:'...'}], class:'...' }) }}
```

| Argument              | Description                                                        |     Data Type |
| :-------------------- | :----------------------------------------------------------------- | ------------: |
| `name`                | The element identifier                                             |        String |
| `controls` (optional) | Display standard video controls (play, pause, volume, etc.)        |       Boolean |
| `sources` (optional)  | An array of objects specifying alternative video sources           | Array[Object] |
| `class` (optional)    | A space-separated list of CSS classes to style the video component |        String |

{% callout type="note" %}
`type:'video/mp4'` is a common format, but check browser compatibility for others
{% /callout %}

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Video component template

```canvas {% process=false %}
<video controls={{ controls }} class={{ class }}>
  {% for source in sources %}
    <source src={{ url }} type={{ type }}>
  {% endfor %}
</video>
```

#### Rendered HTML output

```html {% process=false %}
<video controls class="w-full rounded-lg">
  <source src="https://placehold.co/600x400" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_video('myvideo',{sources:[{type:'video/mp4',url:'https://cdn.blutui.com/uploads/curation/collection-web-2.mp4'}],controls:true}) }}
```

```html {% process=false filename="Output" %}
<video controls>
  <source
    src="https://cdn.blutui.com/uploads/curation/collection-web-2.mp4"
    type="video/mp4"
  />
</video>
```

{% /code-group %}
