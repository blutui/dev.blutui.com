---
title: 'include'
description: 'The include function returns the rendered content of a template.'
---

```canvas {% process=false %}
{{ include('snippets/icon-search') }}
{{ include(some_var) }}
```

{% callout type="note" %}
By default the include function assumes you want to include `.html` or `.canvas` files, this means you dont need to specify a file format.
{% /callout %}

Included templates have access to the variables of the active context. The context is passed by default to the template but you can also pass additional variables:

```canvas {% process=false %}
{# template.html will have access to the variables from the current context and the additional ones provided #}
{{ include('template.html', {foo: 'bar'}, with_context = false) }}
```

```canvas {% process=false %}
{# no variables will be accessible #}
{{ include('template.html', with_context = false) }}
```

When you set the **ignore_missing** flag, Canvas will return an empty string if the template does not exist:

```canvas {% process=false %}
{{ include('sidebar.html', ignore_missing = true) }}
```

You can also provide a list of templates that are checked for existence before inclusion. The first template that exists will be rendered:

```canvas {% process=false %}
{{ include(['page_detailed.html', 'page.html']) }}
```

If **ignore_missing** is set, it will fall back to rendering nothing if none of the templates exist, otherwise it will throw an exception.

When including a template created by an end user, you should consider sandboxing it:

```canvas {% process=false %}
{{ include('page.html', sandboxed = true) }}
```

## Arguments

Argument         | Description                                          | Type
---------------- | ---------------------------------------------------- | -------
`template`       | The template to render                               | String
`variables`      | The variables to pass to the template                | Object
`with_context`   | Whether to pass the current context variables or not | Boolean
`ignore_missing` | Whether to ignore missing templates or not           | Boolean
`sandboxed`      | Whether to sandbox the template or not               | Boolean
