---
title: 'Commands'
---

{% callout type="note" %}
All commands have a `-h` flag for more information about a command.
{% /callout %}

## config

Manage the `courier.json` configuration in the current working directory if it exists.

```bash
courier config
```

## help

Get help with Blutui Courier.

```bash
courier help
```

## init

Create a basic `courier.json` file in the current directory.

```bash
courier init
```

## install

Install the the required services for Blutui Courier.

```bash
courier install
```

## login

Login using your Courier token.

```bash
courier login <courier-token>
```

If your Courier token has expired, you can update it using the `--force` flag:

```bash
courier login <courier-token> -f
```

## open

Open the configured **site** in the current `courier.json`.

```bash
courier open
```

## pull

Pull all the site code for **handle** in the current `courier.json`.

```bash
courier pull
```

## push

Push all the site code for **handle** in the current `courier.json`.

```bash
courier push
```

## uninstall

Uninstall all required services for Blutui Courier.

```bash
courier uninstall
```

## version

Print the current version of Blutui Courier.

```bash
courier version
```

## watch

Watch all the site code changes in the current working directory.

```bash
courier watch
```
