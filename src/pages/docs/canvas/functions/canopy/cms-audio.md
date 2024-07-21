---
title: 'cms_audio'
description: 'The cms_audio function is used to define a audio component which can be edited on the Canopy editor.'
---

```canvas {% process=false %}
{{ cms_audio(name, { controls: ..., autoplay: ..., url: '...', type: '...', class: '...' }) }}
```

| Argument              | Description                                                          | Data Type |
| :-------------------- | :------------------------------------------------------------------- | --------: |
| `name`                | The element identifier                                               |    String |
| `controls` (optional) | Display standard audio controls (play, pause, volume)                |   Boolean |
| `autoplay` (optional) | Starts playback automatically when the page loads.                   |   Boolean |
| `url` (optional)      | Link to the audio file                                               |    String |
| `type` (optional)     | Specify the audio format (most browsers can handle multiple formats) |    String |
| `class` (optional)    | A space-separated list of CSS classes to style the audio component   |    String |

#### Multiple audio sources

```canvas {% process=false %}
{{ cms_audio(name, { controls: ..., autoplay: ..., sources: [{ url:'...', type:'...' },{ url: '...', type: '...' }], class: '...' }) }}
```

| Argument              | Description                                                        |     Data Type |
| :-------------------- | :----------------------------------------------------------------- | ------------: |
| `name`                | The element identifier                                             |        String |
| `controls` (optional) | Display standard audio controls (play, pause, volume)              |       Boolean |
| `autoplay` (optional) | Starts playback automatically when the page loads.                 |       Boolean |
| `sources` (optional)  | An array of objects specifying alternative audio sources           | Array[Object] |
| `class` (optional)    | A space-separated list of CSS classes to style the audio component |        String |

{% callout type="note" %}
`type:'audio/mp3'` is a common format, but check browser compatibility for others
{% /callout %}

{% callout type="note" %}
The `class` variable is only accessible in the code. All other variables are available in the Canopy editor.
{% /callout %}

#### Audio component template

```canvas {% process=false %}
<audio {{ controls }} {{ autoplay }} class={{ class }}>
  {% for source in sources %}
    <source src="{{ url }}" type="{{ type }}">
  {% endfor %}
</audio>
```

#### Rendered HTML output

```html {% process=false %}
<audio controls autoplay class="mt-4 w-full" controls>
  <source src="https://www.example.com/audio.mp3" type="audio/mp3" />
  Your browser does not support the audio element.
</audio>
```

#### Example

{% code-group %}

```canvas {% process=false filename="index.html" %}
{{ cms_audio('myaudio', { class: 'w-full mt-4', controls: false, autoplay: false, url: 'https://www.example.com/audio.mp3', type: 'audio/mp3' }) }}
```

```html {% process=false filename="Output" %}
<audio class="mt-4 w-full">
  <source src="https://www.example.com/audio.mp3" type="audio/mp3" />
</audio>
```

{% /code-group %}
