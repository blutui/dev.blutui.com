---
title: 'embed'
---

The **embed** tag combines the behaviour of [include](/docs/canvas/tags/include) and [extends](/docs/canvas/tags/extends). It allows you to include another template's contents, just like `include` does. But it also allows you to override any block defined inside the included template, like when extending a template.

Think of an embedded template as a "micro layout skeleton".

```canvas {% process=false %}
{% embed 'teasers_skeleton.html' %}
  {# These blocks are defined in "teasers_skeleton.html" and we override them right here: #}
  {% block left_teaser %}
    Some content for the left teaser box
  {% endblock %}
  {% block right_teaser %}
    Some content for the right teaser box
  {% endblock %}
{% endembed %}
```

The **embed** tag takes the idea of template inheritance to the level of content fragments. While template inheritance allows for "document skeletons", which are filled with life by child templates, the **embed** tag allows you to create "skeletons" for smaller units of content and re-use and fill them anywhere you like.

Since the use case may not be obvious, let's look at a simplified example. Imagine a base template shared by multiple pages, defining a single block named "content":

```canvas {% process=false %}
┌─── page layout ─────────────────────┐
│                                     │
│           ┌── block "content" ──┐   │
│           │                     │   │
│           │ (child template to  │   │
│           │  put content here)  │   │
│           │                     │   │
│           └─────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

Some pages ("foo.html" and "bar.html") share the same content structure - two vertically stacked boxes:

```canvas {% process=false %}
┌─── page layout ─────────────────────┐
│                                     │
│           ┌── block "content" ──┐   │
│           │ ┌─ block "top" ───┐ │   │
│           │ │                 │ │   │
│           │ └─────────────────┘ │   │
│           │ ┌─ block "bottom" ┐ │   │
│           │ │                 │ │   │
│           │ └─────────────────┘ │   │
│           └─────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

While other pages ("boom.html" and "baz.html") share a different content structure - two boxes side by side:

```canvas {% process=false %}
┌─── page layout ─────────────────────┐
│                                     │
│           ┌── block "content" ──┐   │
│           │                     │   │
│           │ ┌ block ┐ ┌ block ┐ │   │
│           │ │"left" │ │"right"│ │   │
│           │ │       │ │       │ │   │
│           │ │       │ │       │ │   │
│           │ └───────┘ └───────┘ │   │
│           └─────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

Without the **embed** tag, you have two ways to design your templates:

- Create two "intermediate" base templates that extend the master layout template: one with vertically stacked boxes to be used by the "foo.html" and "bar.html" pages and another one with side-by-side boxes for the "boom.html" and "baz.html" pages.
- Embed the markup for the top/bottom and left/right boxes into each page template directly.

These two solutions do not scale well because they each have a major drawback:

- The first solution may indeed work for this simplified example. But imagine we add a sidebar, which may again contain different, recurring structures of content. Now we would need to create intermediate base templates for all occurring combinations of content structure and sidebar structure… and so on.
- The second solution involves duplication of common code with all its negative consequences: any change involves finding and editing all affected copies of the structure, correctness has to be verified for each copy, copies may go out of sync by careless modifications etc.

In such a situation, the **embed** tag comes in handy. The common layout code can live in a single base template, and the two different content structures, let's call them "micro layouts" go into separate templates which are embedded as necessary:

Page template `foo.html`:

```canvas {% process=false %}
{% extends "layout.html" %}

{% block content %}
  {% embed "vertical_boxes_skeleton.html" %}
    {% block top %}
      Some content for the top box
    {% endblock %}

    {% block bottom %}
      Some content for the bottom box
    {% endblock %}
  {% endembed %}
{% endblock %}
```

And here is the code for `vertical_boxes_skeleton.html`:

```canvas {% process=false %}
<div class="top_box">
  {% block top %}
    Top box default content
  {% endblock %}
</div>

<div class="bottom_box">
  {% block bottom %}
    Bottom box default content
  {% endblock %}
</div>
```

The goal of the `vertical_boxes_skeleton.html` template being to factor out the HTML markup for the boxes.

The **embed** tag takes the exact same arguments as the [include](/docs/canvas/tags/include) tag:

```canvas {% process=false %}
{% embed "base" with {'foo': 'bar'} %}
  ...
{% endembed %}

{% embed "base" with {'foo': 'bar'} only %}
  ...
{% endembed %}

{% embed "base" ignore missing %}
  ...
{% endembed %}
```

As embedded templates do not have "names", auto-escaping strategies based on the template name won't work as expected if you change the context (for instance, if you embed a CSS/JavaScript template into an HTML one). In that case, explicitly set the default auto-escaping strategy with the [autoescape](/docs/canvas/tags/autoescape) tag.
