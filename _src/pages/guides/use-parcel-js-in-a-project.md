---
title: 'How do I use Parcel.js in a Blutui project?'
description: 'Learn how to use Parcel.js to compile your CSS and JavaScript files.'
---

## Introduction

[Parcel.js](https://parceljs.org/) is a fast, zero-configuration web application bundler. Integrating Parcel with your Blutui project allows you to compile your JavaScript and CSS, ensuring that the code you send to Blutui is optimised and web-friendly. This guide will walk you through the process.

## **Prerequisites**

- A Blutui project set up and ready to go.
- A package manager (**`npm`**, **`yarn`**, or **`pnpm`**) installed. If not, refer to the [using a package manager in a Blutui project guide](/guides/use-a-package-manager-in-a-project).

{% callout type="note" %}
This guide focuses on `npm` commands, but you can easily replace them with the relevant `yarn` or `pnpm` commands as they serve similar purposes.
{% /callout %}

## Getting started

{% step title="Installing Parcel.js" position="1" %}
Open your terminal or command prompt and navigate to your Blutui project directory. Install Parcel as a development dependency using:

```bash
npm install -D parcel
```
{% /step %}

{% step title="Structuring your project" position="2" %}
Add a `src` folder at the root of your project, alongside the existing `public` and `views` folders. This folder will store your uncompiled code. Within the `src` folder, create two sub-folders: `styles` and `js`. In the `styles` directory, add a `main.css` file for your project's styles. In the `js` directory, create an `app.js` file for your JavaScript code.
{% /step %}

{% step title="Configuring Parcel.js in your package.json file" position="3" %}
Navigate to your **`package.json`** file and add the following configuration:

```json
"source": [
  "src/js/app.js",
  "src/styles/main.css"
],
"targets": {
  "default": {
    "distDir": "./public"
  }
}
```

This configuration instructs Parcel.js to target the specified files in the `src` folder and output the compiled code to the `public` folder.
{% /step %}

{% step title="Updating the scripts in your package.json file" position="4" %}
Replace the existing `scripts` section or add the following scripts to your `package.json`:

```json
"scripts": {
  "watch": "parcel watch",
  "build": "parcel build"
}
```

This allows you to run Parcel commands using `npm` scripts.

{% callout type="note" %}
Ensure you remove the `"main": "index.js"` line from the `package.json` file, as it's not required.
{% /callout %}
{% /step %}

{% step title="Compiling your with Parcel.js" position="5" %}
To compile your CSS and JavaScript, run:

```bash
npm run build
```

This command utilises Parcel to optimise your code, ensuring it's efficient and web-friendly.
{% /step %}

## Conclusion

Congratulations! You've now successfully integrated the Parcel compiler with your Blutui project. This setup ensures your code is always optimised and web-ready. Happy developing!
