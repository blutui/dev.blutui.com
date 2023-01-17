---
title: 'Deprecated Functions'
description: 'The following Canvas functions are considered deprecated.'
---

It is recommended that you use the alternative functions listed below.

## Collections

### collection

{% callout type="note" %}
**Alternatives**: [cms.collection](/docs/canvas/functions/cms#collection)
{% /callout %}

### collection_raw

{% callout type="note" %}
**Alternatives**: [cms.collection](/docs/canvas/functions/cms#collection)
{% /callout %}

## Forms

### form

{% callout type="note" %}
**Alternatives**: [cms.form](/docs/canvas/functions/cms#form)
{% /callout %}

### form_raw

{% callout type="note" %}
**Alternatives**: [cms.form](/docs/canvas/functions/cms#form)
{% /callout %}

### form_open

{% callout type="note" %}
**Alternatives**: [cms.form](/docs/canvas/functions/cms#form)
{% /callout %}

### form_close

{% callout type="note" %}
**Alternatives**: [cms.form](/docs/canvas/functions/cms#form)
{% /callout %}

## Menus

### menu

{% callout type="note" %}
**Alternatives**: [cms.menu](/docs/canvas/functions/cms#menu)
{% /callout %}

### menu_raw

{% callout type="note" %}
**Alternatives**: [cms.menu](/docs/canvas/functions/cms#menu)
{% /callout %}

## Other

### file

{% callout type="note" %}
**Alternatives**: [include](/docs/canvas/functions/include)
{% /callout %}

**file** returns the file path:

```canvas {% process=false %}
{{ file('path/to/file') }}
```

#### Arguments

Argument   | Description          | Type
---------- | -------------------- | ------
`filepath` | The path to the file | String

### import

{% callout type="note" %}
**Alternatives**: [include](/docs/canvas/functions/include)
{% /callout %}

**import** returns the contents of a file:

```canvas {% process=false %}
{{ import('includes/messages.html') }}
```

{% callout type="warning" %}
The import function no longer renders HTML content within the imported file.
{% /callout %}

#### Arguments

Argument   | Description                                             | Type
---------- | ------------------------------------------------------- | ------
`filepath` | The path to the file, relative to the `views` directory | String
