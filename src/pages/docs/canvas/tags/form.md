---
title: 'form'
description: 'Generates an HTML form tag.'
---

The `form` tag generates an HTML form tag, including any required input tags to submit the form. The `form` tag requires a handle to render it's contents, usually found in your project dashboard:

```canvas {% process=false %}
{% form 'handle' %}
  <!-- form content -->
{% endform %}
```

This will output the following HTML:

```html
<form method="POST" action="/" enctype="multipart/form-data">
  <input type="hidden" name="_form" value="handle" />
  <input type="hidden" name="_token" value="..." autocomplete="off">
  <!-- form content -->
</form>
```

The `form` tag also provides the ability to define custom HTML attributes for the HTML `<form>` element:

```canvas {% process=false %}
{% form 'contact' with { id: 'contact' } %}
  <!-- form content -->
{% endform %}
```

This will output the following HTML:

```html
<form method="POST" action="/" enctype="multipart/form-data" id="contact">
  <input type="hidden" name="_form" value="contact" />
  <input type="hidden" name="_token" value="..." autocomplete="off">
  <!-- form content -->
</form>
```
