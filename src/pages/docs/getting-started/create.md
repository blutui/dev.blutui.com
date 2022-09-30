---
title: 'Create a project'
description: 'Learn how to start building projects in Blutui'
---

## Creating your first project

With Blutui you can create an unlimited number of development projects. A development project is a free password protected website only accessible using the project's development password. When you are ready to publish your project to the world, a recurring monthly fee will apply. Before we get started, you will need a [Blutui account](https://blutui.com/register).

**Steps to get started:**

1. Login to your [Agency Console](https://blutui.com/app).
2. Click **Projects** in the navigation menu.
3. Click **Create project**.
4. In the **Project name** field, give your new project a name. You can also set additional information about the project, such as **Description** and **Timezone**.
5. Click **Create project**.

Now that your new project is created, you may choose to view the new project's dashboard. To view the project dashboard click **Login** from the project settings page in your [Agency Console](https://blutui.com/app).

## Install Blutui Courier

Blutui Courier is a cross-platform command line tool that is used to build Blutui sites locally.

If you haven’t already, now is the time to install `Blutui Courier`. To install Blutui Courier follow the [Getting Started with Blutui Courier](/docs/courier/getting-started) guide.

## Creating a new page

Lets create a new page.

**Steps:**

1. Login to your newly created site. (eg: `my-new-site.blutui.com/admin`)
2. From the `Site Dashboard`, click `Pages`.
3. Click the `+` button at the bottom of the page.
4. Enter the information for your page. The `Layout` is the file path to the page template. For best practice it is recommended that you create your page templates in the `pages` directory of your Canvas.
<media src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/addingapage.gif" alt="Adding a page"></media>

5. If you have not created the page template, go to the `pages` directory in your Canvas template files and add your page. For example if you set the `Layout` to `pages/about.html`, add `about.html` to your `pages` directory.

In your newly created Canvas template add the following code:

```twig
{% extend }
```
