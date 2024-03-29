---
title: 'Variables'
---

Blutui passes variables to the templates for manipulation in the template. Variables may have attributes or elements you can access, too.

Use a dot (`.`) to access attributes of a variable:

```canvas {% process=false %}
{{ foo.bar }}
```

It's important to know that the curly braces are not part of the variable but the print statement. When accessing variables inside tags, don't put the braces around them.

If a variable or attribute does not exist, you will receive a **null** value.

If you want to access a dynamic attribute of a variable, use the [attribute](/docs/canvas/functions/attribute) function instead. The **attribute** function is also useful when the attribute contains special characters (like **-** that would be interpreted as the minus operator):

```canvas {% process=false %}
{# equivalent to the non-working foo.data-foo #}
{{ attribute(foo, 'data-foo') }}
```

## Setting variables

You can assign values to variables inside code blocks. Assignments use the [set](/docs/canvas/tags/set) tag:

```canvas {% process=false %}
{% set foo = 'foo' %}
{% set foo = [1, 2] %}
{% set foo = {'foo': 'bar'} %}
```
{% callout type="note" %}
Ensure that you run `courier push` after each update, to view your changes in the staging environment.
{% /callout %}
