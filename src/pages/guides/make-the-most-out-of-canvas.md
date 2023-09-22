---
title: 'How can I make the most out of Blutui Canvas?'
description: 'Learn how you can leverage Blutui Canvas to build web projects.'
---

## Introduction

Blutui emphasises an organised and component-based approach to web development. One of the platform's strengths is its `views` folder, which is structured for templating. This guide will take you through the essentials of the `views` folder, its sub-folders, and the role of templating in Blutui.

## Prerequisites

- Basic familiarity with the Blutui Canvas structure.

## Step-by-step overview

{% step title="Deciphering the views folder" position="1" %}
When you navigate to the `views` folder, you'll encounter two primary sub-folders:

- **templates**: Contains:
  - `default.html`: The foundational template for your Blutui project.
  - `404.html`: A template for handling "Page Not Found" errors.
- **pages**: Houses the `index.html` file, which is central to rendering your site's content.
{% /step %}

{% step title="The role of the default.html file" position="2" %}
This file forms the outermost structure of your Blutui project. It features essential sections like the head, where style definitions reside, and the body, where content gets placed. The most efficient way to build upon this file is by using inheritance, capitalising on the [block](/docs/canvas/tags/block) tag.
{% /step %}

{% step title="Understanding inheritance in Blutui" position="3" %}
Navigate to the `views/pages/index.html` file. At the top, you'll notice the code `{% extends 'templates/default' %}`. This code signifies that the content from `index.html` will be placed inside the `default.html` template. The `index.html` file utilises blocks, such as styles and body, which correspond to the blocks in `default.html`. This structure enables you to insert content precisely where you intend to.
{% /step %}

{% step title="Component methodology" position="4" %}
In Blutui, the approach to development centers on creating reusable components. By doing so, developers can speed up their process, ensuring efficient and consistent design throughout.
{% /step %}

{% step title="Blutui's compilation process" position="5" %}
Blutui compiles your site by placing content as per your declarations. It also processes code constructs such as conditional statements ([if/ifelse/else](/docs/canvas/tags/if)) and loops ([for](/docs/canvas/tags/for) loops).
{% /step %}

{% step title="Dive deeper" position="6" %}
To enhance your understanding of templating in Blutui, refer to the [templating documentation](/docs/canvas/getting-started/templating).
{% /step %}

## Conclusion

Blutui's `views` folder structure and templating system promote an organised, modular, and efficient web development experience. By mastering these concepts, you'll streamline your web projects and enhance maintainability. Hopefully you become the next Bob Ross with your Blutui Canvas.
