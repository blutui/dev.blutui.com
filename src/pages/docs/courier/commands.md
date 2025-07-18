---
title: 'Commands'
---

{% callout type="note" %}
All commands have a `-h` flag for more information about a command.
{% /callout %}

## create

Create a new Blutui project using a selected Canvas in the specified directory.

```bash
courier create
```

## config

Manage the `courier.json` configuration in the current working directory if it exists.

```bash
courier config
```

## dev

This command will set up a local dev environment hosting your `public` folder, use the `views` folder to watch for changes and push the modified files, and utilize the Blutui cloud to build for you, accessible at `localhost:8080`.

```bash
courier dev
```

{% callout type="note" %}
On the first run, `dev` does not automatically push code, it starts monitoring file changes in the views directory.
{% /callout %}

## help

Get help with Blutui Courier.

```bash
courier help
```

## init

Create a basic `courier.json` file in the current directory for the provided project handle.

```bash
courier init [project-handle]
```

## login

Log in to Courier using your Blutui access token.

```bash
courier login --token < token.txt
```

If your Courier token has expired, you can login again using the same command.

## open

Open the current project in the web browser.

```bash
courier open
```

## pull

Pull all the site code for **handle** from the current `courier.json`, targeting the `public` and `views` folders.

```bash
courier pull
```

## push

Push all the site code for **handle** from the current `courier.json`, targeting the `public` and `views` folders.

```bash
courier push
```

## version

Print the current version of Blutui Courier.

```bash
courier version
```
