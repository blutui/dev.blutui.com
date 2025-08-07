---
title: 'How do I pull a project onto my machine?'
description: 'Learn how to pull your project from Blutui onto your machine for development.'
---

{% step title="Create a directory for your project" position="1" %}
Navigate into a directory of your choice and run the following command to create a fresh directory for your project:

```bash
mkdir my_site_1
```
{% /step %}

{% step title="Navigate into the directory" position="2" %}
You can now navigate into the newly created directory:

```bash
cd my_site_1
```
{% /step %}

{% step title="Generate a configuration file" position="3" %}
Let’s generate a `courier.json` configuration file, assuming your site handle is `my_site_1`, run the following command:

```bash
courier init -H my_site_1 -s my_site_1.blutui.com
```
{% /step %}

{% step title="Pull your project files" position="4" %}
Finally, let’s pull the project files from Blutui onto your machine. Run the following command to pull your project:

```bash
courier pull
```
{% /step %}
