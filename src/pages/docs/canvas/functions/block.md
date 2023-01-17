---
title: 'block'
description: 'When a template uses inheritance and if you want to print a block multiple times, use the block function.'
---

```canvas {% process=false %}
<title>{% block title %}{% endblock %}</title>

<h1>{{ block('title') }}</h1>

{% block body %}{% endblock %}
```

The **block** function can also be used to display one block from another template:

```canvas {% process=false %}
{{ block('title', 'common_blocks.html') }}
```

Use the **defined** test to check if a block exists in the context of the current template:

```canvas {% process=false %}
{% if block('footer') is defined %}
  ...
{% endif %}

{% if block('footer', 'common_blocks.html') is defined %}
  ...
{% endif %}
```
