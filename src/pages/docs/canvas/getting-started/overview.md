---
title: 'Canvas'
description: 'Welcome to Canvas, the flexible, fast, and secure template engine for Blutui.'
---

## What is Blutui Canvas?

A Canvas determines the way a project will look and feel for your client's project. Blutui project's are built using Blutui's templating language, Canvas, as well as HTML, CSS and/or JavaScript. As a developer you can custom Canvas for every client project that goes through your Agency or build a template and use that as the foundation for all your client web projects.

### What is a template?

A template is a regular text file. It can generate any text-based format (HTML, XML, CSV, LaTeX, etc.).

A template contains **variables** or **expressions**, which get replaced with values when the template is evaluated, and **tags**, which control the template's logic.

Below is a minimal template that illustrates a few basics. We will cover further details later on:

```canvas {% process=false %}
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>

  <body>
    <ul id="navigation">
      {% for item in navigation %}
        <li><a href="{{ item.href }}">{{ item.caption }}</a></li>
      {% endfor %}
    </ul>

    <h1>My Webpage</h1>
    {{ a_variable }}
  </body>
</html>
```

There are two kinds of delimiters: `{% ... %}` and `{{ ... }}`. The first one is used to execute statements such as for-loops, the latter outputs the result of an expression.

## Project structure

The Canvas file structure gives you the ability to structure your project in a way that suits your workflow. However you are **required** to include the `public/` and `views/` folders. The following is a breakdown of there are required folders:

- `public`: This directory contains your projects public assets. CSS, JS, and image files can all be found in this folder and are accessible from your browser.
- `views`: This directory is the location for your projects `.html` or `.canvas` template files. All files in this folder are used by the Blutui platform to render your client's project.

The folder structure within the `public` and `views` directory is completely up to you. To get started with creating a page for your project, you have two options:

1. **Create a page through Canvas**: This can be achieved by creating a `pages` folder in your `views` directory, then create a new `.html` or `.canvas` file, for example: `index.html` or `index.canvas` would be the homepage of your site.
2. **Create a page through the Site Dashboard**: Create a new page through the **Pages** menu and specify a **Layout**. A layout path is always relative to the `views` directory of your project.

The default project comes with a `pages` folder in the `views` directory. For for information how to create your first project in Blutui, read the [getting started](/docs/getting-started/create) guide

{% callout type="note" %}
Ensure that you run `courier push` after each update, to view your changes in the staging environment.
{% /callout %}
