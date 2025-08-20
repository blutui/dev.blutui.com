---
title: 'What is a Blutui Canvas?'
description: "Understand the fundamentals of a Blutui project's file structure."
---

## Introduction

Blutui provides developers with a flexible yet specific environment called a Canvas. It's crucial to understand the Canvas's file structure to make the most out of your Blutui experience. This guide delves into the essentials of navigating and utilising this structure efficiently.

## Prerequisites

- Basic understanding of HTML, CSS, and/or JS.
- A Blutui Courier installation on [macOS](/guides/install-courier-on-macos), [Linux](/guides/install-courier-on-linux), or [Windows](/guides/install-courier-on-windows).
- Completion of the guide on [how to pull a project onto your machine using Courier](/guides/pull-project-with-courier).

## Step-by-step overview

{% step title="Starting with the basics" position="1" %}
After following the [how to pull a project onto your machine using Courier](/guides/pull-project-with-courier) guide, you will find yourself with a basic template known as a Canvas. Within this template, you will notice:

- Two main folders. `views` & `public` directories.
- A `courier.json` file.
{% /step %}

{% step title="Delving into the Canvas file structure" position="2" %}
While the Canvas is designed to be flexible to accommodate various workflows, there are certain mandatory folders:

- `public`:
  - **Purpose**: Houses the project's public assets.
  - **Contents**: This is where you'll find and store your CSS, JS, and image files. Everything here is directly accessible via a web browser.
- `views`:
  - **Purpose**: Dedicated to your project's `.html` or `.canvas` template files.
  - **Contents**: All files in this directory are crucial for the Blutui platform, as they determine how your client's project will be rendered.

{% callout type="note" %}
  The internal folder structure within both `public` and `views` directories can be tailored according to your preferences.
{% /callout %}
{% /step %}

{% step title="Additional resources" position="3" %}
If you're looking to dive deeper and explore more about the Canvas, consider visiting the dedicated documentation.

{% card title="Canvas" href="/docs/canvas/getting-started/overview" %}
  Welcome to Canvas, the flexible, fast, and secure template engine for Blutui.
{% /card %}
{% /step %}

## Conclusion

By understanding the Canvas file structure, you empower yourself to harness the full potential of Blutui, setting the stage for efficient and organized web development. Happy coding!
