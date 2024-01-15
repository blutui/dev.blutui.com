---
title: 'How do I install Courier on Windows?'
description: 'Learn how to get started with Blutui Courier on Windows.'
---

## Introduction

Courier is a development tool that allows you to write code locally and view the results instantly. Once you're satisfied with your work, you can push it to your Blutui project for review. Courier is designed to offer the best of both worlds by integrating local workflow with the cloud, thereby making development faster, more enjoyable, and more creative. This guide walks you through the process of installing and setting up Courier on a Windows machine.

## Prerequisites

- [Scoop](https://scoop.sh/) package manager installed
- Administrative access for local server setup and cloud connectivity

## Installation

{% step title="Add the Courier Scoop Bucket" position="1" %}
Firstly, open your Command Prompt (CMD) or PowerShell and run the following command:

```bash
scoop bucket add blutui <https://github.com/blutui/bucket-courier.git>
```
{% /step %}

{% step title="Install Courier via Scoop" position="2" %}
Secondly, continue in the same window with:

```bash
scoop install blutui/courier
```
{% /step %}

{% step title="Set up required services" position="3" %}
After your first installation of Courier, it's time to set up the required services. Run:

```bash
courier install
```

You may be prompted to enter your administrative password.
{% /step %}

{% step title="Verify the installation" position="4" %}
Lastly, to ensure that Courier has been installed correctly, run:

```bash
courier
```

This will display a list of available commands, confirming Courier is now successfully installed.
{% /step %}

## Authentication

{% step title="Generate a Courier token" position="1" %}
1. Navigate to your Agency Console and click on your avatar in the top-right corner.
2. Choose "Edit my profile."
3. Go to the "Apps" section from the sidebar.
4. Click the "Create token" button on the right-hand side.
5. Name your token (e.g., "Work Laptop") and click "Create"

Remember, the token will expire in one year, so plan to renew it accordingly.
{% /step %}

{% step title="Login to Courier" position="2" %}
Copy the token and run the following command in your CMD or PowerShell:

```bash
courier login [your-courier-token]
```
{% /step %}

You've successfully installed and set up Courier on a Windows machine! Feel free to start coding and enjoy a more streamlined development process.

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
