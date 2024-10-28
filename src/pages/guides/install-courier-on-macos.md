---
title: 'How do I install Courier on macOS?'
description: 'Learn how to get started with Blutui Courier on macOS.'
---

## Introduction

Courier is a development tool that allows you to write code locally and view the results instantly. Once you're satisfied with your work, you can push it to your Blutui project for review. Courier is designed to offer the best of both worlds by integrating local workflow with the cloud, thereby making development faster, more enjoyable, and more creative. This guide outlines the steps to install and set up Courier on a macOS machine.

## Prerequisites

- [Homebrew](https://brew.sh/) installed.
- Administrative access for local setup and cloud connectivity.

## Installation

{% step title="Add the Courier Homebrew Tap" position="1" %}
Firstly, open your terminal and run the following command:

```bash
brew tap blutui/courier
```
{% /step %}

{% step title="Install Courier" position="2" %}
Secondly, continue in your terminal with:

```bash
brew install courier
```

Courier will require administrative access for running projects locally and connecting to Blutui.
{% /step %}

{% step title="Verify the installation" position="3" %}
Lastly, to confirm that Courier is successfully installed, run:

```bash
courier
```

This will display a list of available commands, confirming Courier is now successfully installed.
{% /step %}

## Additional steps for Firefox users

If you're using Firefox, you'll need to install Network Security Services (NSS):

{% step title="Install NSS" position="1" %}
```bash
brew install nss
```
{% /step %}

Now you should be able to use `courier dev` on Firefox.

## Authentication

{% partial file="create-courier-token.md" /%}

And there you have it—a complete guide to installing, and setting up Courier on macOS!

## More resources

{% card title="How do I pull a project onto my machine?" href="/guides/pull-project-with-courier" %}
  Learn how to pull your project from Blutui onto your machine for development.
{% /card %}

{% card title="How do I preview a project onto my machine?" href="/guides/preview-project-with-courier" %}
  Learn how to preview your project on your machine while in development.
{% /card %}

{% card title="How do I push a project to Blutui?" href="/guides/push-project-with-courier" %}
  Learn how to push your project code from your machine to Blutui.
{% /card %}
