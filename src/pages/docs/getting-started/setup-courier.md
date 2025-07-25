---
title: 'Setup Blutui Courier'
description: 'Learn how to setup courier'
---

Blutui Courier is an essential cross-platform command-line interface (CLI) tool designed to streamline the local development and deployment of your Blutui projects. It allows you to seamlessly pull your project files from the Blutui platform, make local modifications, and push those changes back.

---

### Getting Started with Blutui Courier

To begin using Blutui `Courier`, you first need to install it on your local machine. Please follow the comprehensive [ getting started with Blutui Courier ](/docs/courier/getting-started) guide. This guide provides detailed instructions for installation, ensuring you have Courier set up correctly for your operating system.

### Initializing Your Local Project with Courier

Once Blutui Courier is successfully installed, you can use it to scaffold a new project directly on your local machine. This sets up the foundational file structure and necessary configurations based on a chosen `Canvas`.

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

**base**: A minimal project structure.

**tailwindcss**: A project scaffold configured with Tailwind CSS.

**tailwindcss-js**: A project scaffold that includes Tailwind CSS along with a JavaScript compiler **Parcel** for efficient asset bundling.

For a complete and up-to-date list of all available Canvases, including community-contributed options, please visit the [Blutui Canvases GitHub repository](https://github.com/blutui/canvases).

{% callout type="note" %}
You can create custom scaffolding canvases to fit your specific needs. If you'd like to share a canvas that would help the wider Blutui community, submit a pull request to the [Blutui Canvases GitHub repository](https://github.com/blutui/canvases) to make it available to all users.
{% /callout %}

Upon selecting the appropriate `Canvas`, Courier will scaffold your new project within a new directory named `burgertorium`.
{%/step%}

{% step title="Initializing Courier Configuration" position="5" %}
After your project has been scaffolded, cd into your new project directory. For our example, you would run

```bash
cd burgertorium
```

Next, run

```bash
courier init burgertorium
```

(replace `burgertorium` with your actual project name) to initialize the Courier configuration for your project. Running this command will create a `courier.json` file in your project directory, which is essential for Courier to manage your project.

{%/step%}

---

### What's Next? Understanding the Blutui Folder Structure

Once you've scaffolded your project using Blutui Courier, you'll find a well-organized folder structure designed to separate your compiled output from your front-end logic. Navigating this structure is key to efficient development.

Continue to the [Blutui Folder Structure]() to begin developing your project.
