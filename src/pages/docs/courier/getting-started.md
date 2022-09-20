---
title: Getting started
---

# {% $markdoc.frontmatter.title %}

`courier` is a Blutui command-line interface to interact with your Blutui project(s). It allows you to easily push and pull code to and from your project.

## Features

- Experience the power of Blutui from your local environment using `courier watch`, to easily keep your code in sync.
- Easily push code to your project using the simple `courier push` command.
- Get started with a new project using `courier pull` to easily pull the latest code for your project.

## Start using Courier

### Installation

`courier` is easy to install, works on macOS, Windows, and many popular Linux distributions.

- `macOS`
- `Windows`
- `Linux`

### Create a Courier token

Before you can start using Courier, you will need to obtain a Courier token. Follow these steps:

1. From the Agency Console, go to your `Profile` from by clicking on your avatar in the top right corner.
2. Navigate to the `Apps` section from the sidebar.
3. Click the `Create token` button on the right-hand side.
4. Give your new Courier token a name, something like "Work MacBook", then click `Create`.
5. Your Courier token will be shown for use later on. Please remember that this token is only shown once.

### Linking your project

After obtaining a Courier token, its time to pull your first project. Open your preferred terminal and create a new directory, for this example we will create a `new-project` directory:

```bash
mkdir new-project
cd new-project
```

Once inside the `new-project` directory, it's time to setup a new `courier.json` configuration file. The configuration file is used by Blutui to determine what project you are currently in. To create a new `courier.json` file, run:

```bash
courier init -H [your-project-handle] -s [your-project-url] -t [your-courier-token]
```

For example:

```bash
courier init -H sonic -s sonic.blutui.com -t o03fs...
```

You should now have a brand new `courier.json` configuration file in your `new-project` directory. Now let's `pull` your project code from Blutui, this will allow you to build your project locally. To `pull` your project code from Blutui, run:

```bash
courier pull
```

You can run `courier watch` to watch for file changes and automatically sync changes to your project.
