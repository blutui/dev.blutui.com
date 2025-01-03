---
title: 'Upgrade'
---

{% callout type="warning" %}
This upgrade guide is intended for users currently running [@blutui/cli](https://www.npmjs.com/package/@blutui/cli) via npm.
{% /callout %}

## Installation

`courier` is as easy to install as `@blutui/cli`, works on macOS, Windows, and many popular Linux distributions. Follow the simple [getting started guide](/docs/courier/getting-started).

## Upgrading existing projects

After installing Blutui Courier, you should upgrade your existing sites to support Courier. Adding support is easy, follow the simple [getting started guide](/docs/courier/getting-started) to learn how to create the new `courier.json` file.

If you are upgrading to Blutui Courier it is important to note that the new `push` and `pull` commands will only sync the `public` and `views` directory. This behavior is intended to make it faster to `push` and `pull` code.

**Note:** If you use `git` we recommend adding the `.courier` directory to your `.gitignore` file. The `.courier` directory is used by Blutui Courier to serve your site locally.

## Uninstalling older versions

It is recommended that you uninstall `@blutui/cli` this version of the command-line interface for Blutui is no longer supported.

{% callout type="note" %}
If you use Firefox there is an extra step to get Blutui Courier working. See the [installation guide](/docs/courier/installation).
{% /callout %}
