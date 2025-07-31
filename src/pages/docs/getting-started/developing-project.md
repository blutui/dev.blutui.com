---
title: 'Developing Your Project'
description: 'Start building your Blutui project with confidence.'
---

Now that you have scaffolded your Blutui project and understand the folder structure, you are ready to build your site.

Depending on the starter canvas you chose during the **courier create** step, you will need to run:

```bash
npm install
```

to install all necessary dependencies.

After which you can run:

```bash
courier dev
```

to start your development server on `https://localhost:8080/`.

{% callout type="warning" %}
Courier only tracks changes after you have run the development server.
{%/callout %}

Let's edit the **index.canvas** page and add the following code.

```canvas {% process=false filename="pages/index.canvas" %}
{% extends 'templates/default' %}

{% block body %}
    <h1>Hello blutui</h1>
    {{ cms_text('text-tag', { value: 'Editable text content.' }) }}
{% endblock %}
```

Reload your browser and you should see the text on your page.

{% callout type="note" %}
If you use a text editor like VS Code, you can use the [Prettier plugin](https://www.npmjs.com/package/prettier-plugin-canvas) for Canvas to auto-format your Blutui code. Look at [Setting up Prettier with Blutui]().
{%/callout %}

{% callout type="note" %}
The **cms_text** function is a **Canopy** element, which are editable pieces of content on your site. These are defined by developers in code and can be edited by content editors on the dashboard.

Learn more about [Canopy elements]().
{%/callout %}

Once you're happy with your changes, run

```bash
courier push
```

to push your changes.

Your project will be available on your **staging site** at
`https://[project-handel].blutui.com`

---

### What's Next? Deploying Your Project

When you're ready to make your project live, you can [deploy it to production]().
