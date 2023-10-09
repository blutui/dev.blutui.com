---
title: 'Deprecated Functions'
description: 'The following Canvas functions are considered deprecated.'
---

It is recommended that you use the alternative functions listed below.

## file

{% callout type="note" %}
**Alternatives**: [include](/docs/canvas/functions/include)
{% /callout %}

**file** returns the file path:

```canvas {% process=false %}
{{ file('path/to/file') }}
```

### Arguments

Argument   | Description          | Type
---------- | -------------------- | ------
`filepath` | The path to the file | String

## import

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

### Arguments

Argument   | Description                                             | Type
---------- | ------------------------------------------------------- | ------
`filepath` | The path to the file, relative to the `views` directory | String
