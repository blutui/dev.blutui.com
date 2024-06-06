---
title: 'How do I use Tailwind CSS on a project?'
description: 'Learn how to use Tailwind CSS in your Blutui project.'
---

## Introduction

TailwindCSS is a utility-first CSS framework that allows for rapid development of web interfaces. This guide will walk you through integrating TailwindCSS with your Blutui project.

## Prerequisites

- A Blutui project set up and ready to go.
- A package manager (`npm`, `yarn`, or `pnpm`) installed. If not, refer to the using a package manager in a Blutui project guide.

## Getting started

{% step title="Installing Tailwind CSS" position="1" %}
Open your terminal or command prompt and navigate to your Blutui project directory. Begin by installing TailwindCSS using:

```bash
npm install -D tailwindcss postcss
```

Initialise the configuration for TailwindCSS with:

```bash
npx tailwindcss init
```

This command will create a `tailwind.config.js` file in your project root.
{% /step %}

{% step title="Configure Tailwind CSS" position="2" %}
Add the following configuration to `tailwind.config.js` under the `content` key to instruct TailwindCSS where to look for classes:

```js
content: [
  "./views/**/*.{canvas,html}",
],
```

{% /step %}

{% step title="Setting up the source directory" position="3" %}
Create a `src` folder at the root of your project, so you have `src`, `public`, and `views` folders. This structure allows TailwindCSS to only compile the classes you're using. Inside the `src` folder, create a `styles` sub-folder and then add a `main.css` file within it. Add the following directives in the `main.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

{% /step %}

{% step title="Compiling Tailwind CSS" position="4" %}
Execute the following command:

```bash
npx tailwindcss -i ./src/styles/main.css -o ./public/main.css --watch
```

This command compiles the CSS and outputs it to the `public` folder, making it ready to link in your template.
{% /step %}

{% step title="Integrating Tailwind CSS with Parcel.js" position="5" %}
If you're using Parcel in your Blutui project and need to set it up, refer to the guide on [setting up Parcel with Blutui](/guides/use-parcel-js-in-a-project).

Next, create a `.postcssrc` file at the root of your project (next to the `tailwind.config.js` file) and add the following configuration:

```js
{
  plugins: {
    tailwindcss: {
    }
  }
}
```

Now, direct Parcel to compile the CSS file. With the above configuration, Parcel should successfully compile your TailwindCSS styles.
{% /step %}

## Conclusion

You've now successfully integrated TailwindCSS with your Blutui project! This setup ensures that your site benefits from the rapid and efficient styling capabilities of TailwindCSS. Enjoy your streamlined development process!
