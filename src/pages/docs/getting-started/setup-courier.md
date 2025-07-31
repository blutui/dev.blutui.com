---
title: 'Setup Blutui Courier'
description: 'Learn how to setup courier'
---

Blutui Courier is an essential cross-platform command-line interface (CLI) tool designed to streamline the local development and deployment of your Blutui projects. It allows you to seamlessly pull your project files from the Blutui platform, make local modifications, and push those changes back.

## Getting Started with Blutui Courier

To begin using Blutui **Courier**, you first need to install it on your local machine. Please follow the comprehensive [ getting started with Blutui Courier ](/docs/courier/getting-started) guide. This guide provides detailed instructions for installation, ensuring you have Courier set up correctly for your operating system.

{% callout type="warning" %}
**Courier** needs to be installed before you can scaffold a new project. Make sure you have followed the installation instructions for your operating system.
{% /callout %}

### Initializing Your Local Project with Courier

Once Blutui Courier is successfully installed, you can use it to scaffold a new project directly on your local machine. This sets up the foundational file structure and necessary configurations based on a chosen **Canvas**.

{% step title="Open your terminal or command prompt" position="1" %}
{%/step%}

{% step title="Run the courier create command" position="2" %}

```bash
courier create
```

![Courier create](https://cdn.blutui.com/uploads/assets/Dev/courier/courier-create-project)
{%/step%}

{% step title="Enter your unique project name" position="3" %}
![Courier enter project name](https://cdn.blutui.com/uploads/assets/Dev/courier/courier-create-canvas-res)
{%/step%}

{% step title="Choose your Canvas" position="4" %}
You will then be presented with a list of available Canvases. Canvases are pre-configured project templates that provide a starting point for your development, including

[**base**](https://github.com/blutui/blueprint-blutui-base): A minimal project structure.

[**tailwindcss**](https://github.com/blutui/blueprint-blutui-tailwindcss): A project scaffold configured with Tailwind CSS.

[**tailwindcss-js**](https://github.com/blutui/blueprint-blutui-tailwindcss-js): A project scaffold that includes Tailwind CSS along with a JavaScript compiler Parcel for efficient asset bundling.

[**headless-nextjs-blank**](https://github.com/blutui/blueprint-nextjs-blank): A minimal Next.js project setup without any opinionated styles or configurations.

For a complete and up-to-date list of all available Canvases, including community-contributed options, please visit the [Blutui Canvases GitHub repository](https://github.com/blutui/canvases).

{% callout type="note" %}
If you'd like to share a canvas that would help the wider Blutui community, submit a pull request to the [Blutui Canvases GitHub repository](https://github.com/blutui/canvases) to make it available to all users.
{% /callout %}

Upon selecting the appropriate **Canvas**, Courier will scaffold your new project within a new directory named **[project-handle]**.
{%/step%}

{% step title="Initializing Courier Configuration" position="5" %}
After your project has been scaffolded, cd into your new project directory.

```bash
cd [project-handle]
```

Next, run

```bash
courier init [project-handle] --cassette [cassette-name]
```

Running this command will create a `courier.json` file in your project directory, which is essential for Courier to manage your project.

#### Understanding Cassettes

**Cassettes** are Blutui's method for managing different versions of a website.
For example, if you have a main website but also need distinct versions for events like Christmas or Halloween, cassettes allow you to easily switch between these different site UIs. We'll delve deeper into [**Cassettes**]() later in this quick start guide.
{%/step%}

---

### What's Next? Understanding the Blutui Folder Structure

Once you've scaffolded your project using Blutui Courier, you'll find a well-organized folder structure designed to separate your compiled output from your front-end logic. Navigating this structure is key to efficient development.

Continue to the [Blutui Folder Structure](/docs/getting-started/folder-structure) to begin developing your project.
