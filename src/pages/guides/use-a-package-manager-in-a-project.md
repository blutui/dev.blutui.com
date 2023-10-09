---
title: 'How do I use a package manager in a Blutui project?'
description: 'Learn how to use a package manager like npm, yarn, or pnpm in your Blutui project.'
---

## Introduction

A package manager helps to manage project dependencies and streamline the workflow. This guide will assist you in integrating a package manager (like `npm`, `yarn`, or `pnpm`) into your Blutui project.

## Prerequisites

- Basic familiarity with terminal/command line usage.
- A Blutui project set up and ready to go.

## Getting started

{% step title="Choose your package manager" position="1" %}
You can opt for any of the three primary package managers: `npm`, `yarn`, or `pnpm`. Each has its distinct features and benefits.
{% /step %}

{% step title="Installation" position="2" %}
If you haven't installed any of these, follow the relevant guide below:

- **npm**: As `npm` comes bundled with Node.js, install Node.js from [here](https://nodejs.org/en).
- **yarn**: Get started with yarn by visiting [Yarn installation guide](https://yarnpkg.com/getting-started/install).
- **pnpm**: To set up pnpm, refer to the [pnpm installation guide](https://pnpm.io/installation).
{% /step %}

{% step title="Create the package.json file" position="3" %}
Open your terminal or command prompt. Navigate to your Blutui project directory using the `cd` command.

If you're using `npm`, run the command:

```bash
npm init
```

For `yarn` users, the equivalent command is:

```bash
yarn init
```

If you're using `pnpm`, use:

```bash
pnpm init
```
{% /step %}

## Conclusion

By successfully integrating a package manager into your Blutui project, you've set the foundation for efficient dependency management and streamlined your project workflow. Whether you use `npm`, `yarn`, or `pnpm`, you're now equipped to handle packages and modules in a structured manner. Happy coding!
