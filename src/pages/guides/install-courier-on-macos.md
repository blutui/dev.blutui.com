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

{% step title="Run the installer" position="3" %}
Next, execute the following command:

```bash
courier install
```

You will be prompted to enter your admin password.
{% /step %}

{% step title="Verify the installation" position="4" %}
Lastly, to confirm that Courier is successfully installed, run:

```bash
courier
```

This will display a list of available commands, confirming Courier successfully is now installed.
{% /step %}

## Additional steps for Firefox users

If you're using Firefox, you'll need to install Network Security Services (NSS):

{% step title="Install NSS" position="1" %}
```bash
brew install nss
```
{% /step %}

{% step title="Run the installer again" position="2" %}
```bash
courier install
```
{% /step %}

Now you should be able to use `courier watch` on Firefox.

## Authentication

{% step title="Generate a Courier token" position="1" %}
1. Navigate to your Agency Console and click on your avatar in the top-right corner.
2. Choose "Edit my profile."
3. Go to the "Apps" section from the sidebar.
4. Click the "Create token" button on the right-hand side.
5. Name your token (e.g., "Work MacBook") and click "Create."

Remember, the token will expire in one year, so plan to renew it accordingly.
{% /step %}

{% step title="Login to Courier" position="2" %}
Copy your newly created token and run the following command in your terminal:

```bash
courier login [your-courier-token]
```
{% /step %}
