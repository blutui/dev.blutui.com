---
title: 'asset'
description: 'The asset function returns the public path for the given asset path.'
---

For projects that are published, the `asset` function returns the CDN path of the given asset path:

```canvas {% process=false %}
{{ asset('images/header-background.png') }}
{{ asset(some_var) }}
```

{% callout type="note" %}
The asset function only resolves files from the `public` directory in the project folder.
{% /callout %}

## Filters

For convenience, Canvas includes filters that can be used to easily generate **img**, **style**, or **script** HTML tags:

```canvas {% process=false %}
{{ asset('images/logo.png') | image_tag }}
{# outputs: <img src="images/logo.png" /> #}

{{ asset('css/bootstrap.min.css') | stylesheet_tag }}
{# outputs: <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"> #}

{{ asset('js/jquery.min.js') | script_tag }}
{# outputs: <script src="js/jquery.min.js" type="text/javascript"></script> #}

{{ 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js' | script_tag }}
{# outputs: <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" type="text/javascript"></script> #}
```
