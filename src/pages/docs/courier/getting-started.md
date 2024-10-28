---
title: Getting started
description: Courier is a Blutui command-line interface to interact with your Blutui project(s). It allows you to easily push and pull code to and from your project.
---

## Features

- Experience the power of Blutui from your local environment using `courier dev`, to easily keep your code in sync.
- Easily push code to your project using the simple `courier push` command.
- Get started with a new project using `courier pull` to easily pull the latest code for your project.

## Start using Courier

### Installation

`courier` is easy to install, works on macOS, Windows, and many popular Linux distributions.

{% card title="macOS" href="/docs/courier/installation/macos" %}
  Available via Homebrew.
{% /card %}

{% card title="Windows" href="/docs/courier/installation/windows" %}
  Available via scoop.
{% /card %}

{% card title="Linux" href="/docs/courier/installation/linux" %}
  Available on many popular Linux distributions.
{% /card %}



### Linking your project

After obtaining a Courier token, its time to pull your first project. Open your preferred terminal and create a new directory, for this example we will create a `new-project` directory:

```bash
mkdir new-project
cd new-project
```

Once inside the `new-project` directory, it's time to setup a new `courier.json` configuration file. The configuration file is used by Blutui to determine what project you are currently in. To create a new `courier.json` file, run:

```bash
courier init [your-project-handle]
```

For example:

```bash
courier init sonic
```

You should now have a brand new `courier.json` configuration file in your `new-project` directory. Now let's `pull` your project code from Blutui, this will allow you to build your project locally. To `pull` your project code from Blutui, run:

```bash
courier pull
```

You can run `courier dev` to watch for file changes and automatically sync changes to your project.
