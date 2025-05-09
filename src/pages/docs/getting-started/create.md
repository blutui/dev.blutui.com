---
title: 'Create a project'
description: 'Learn how to start building projects in Blutui'
---

## Creating your first project

With Blutui you can create an unlimited number of development projects. A development project is a free password protected website only accessible using the project's development password. When you are ready to publish your project to the world, a recurring monthly fee will apply. Before we get started, you will need a [Blutui account](https://blutui.com/register).

**Steps to get started:**

1. Login to your [Agency Console](https://console.blutui.com).
2. Click **Projects** in the navigation menu.
3. Click **Create project**.
4. In the **Project name** field, give your new project a name. You can also set additional information about the project, such as **Description** and **Timezone**.
5. Click **Create project**.

Now that your new project is created, you may choose to view the new project's dashboard. To view the project dashboard click **Login** from the project settings page in your [Agency Console](https://console.blutui.com).

## Install Blutui Courier

Blutui Courier is a cross-platform command line tool that is used to build Blutui projects locally.

If you haven't already, now is the time to install `Blutui Courier`. To install Blutui Courier follow the [Getting Started with Blutui Courier](/docs/courier/getting-started) guide.

**Using Courier**

To pull the project you want to use:

```bash
courier pull
```

Then after you have made changes you want to use:

```bash
courier push
```
{% callout type="note" %}
Make sure that you run `courier push` after each change to have it go to staging
{% /callout %}

If you want to run a local enviroment of your site then use:


```bash
courier dev
```

## Creating a new page

First lets create a new page on your newly created project.

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/addingapage.gif)

**Steps:**

1. Login to your newly created project. You can quickly log into your project through the **Projects** page on your [Agency Console](https://console.blutui.com).
2. Once logged in, from the **Site Dashboard**, navigate to **Pages** using the navigation sidebar and click the **Add page** button at the top right side of the page.
3. Enter the required information for your page. The **Layout** is the file path to the page template. For best practice it is recommended that you create your page templates in the `pages` directory of your Canvas.
4. If you have not created the page template, go to the `pages` directory in your Canvas template files and add create your  new page layout. For example if you set the `Layout` to `pages/about.html`, add `about.html` to your `pages` directory.

In your newly created Canvas template add the following code:

```canvas {% process=false filename="pages/about.html" %}
{% extends 'templates/default' %}

{% block body %}
  <!--This is where your page code goes-->
{% endblock %}
```

For more information on the Canvas templating language, read the [Getting started with Canvas](/docs/canvas/getting-started/overview) guide.

## Add a navigation menu

Now that you know how to make pages, let's look at creating a navigation menu.

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/menu.gif)

**Steps:**

1. To create a navigation menu, navigate to the **Menus** page through the sidebar in your projects **Site Dashboard**.
2. Click on the **Create menu** button on the top right of the page.
3. Give your new menu a **Name**, add items to your menu, and set a **Handle**. A **Handle** is used in your Canvas template to create a reference to the CMS object.

Now that you have a menu, let's learn how to add it to your Canvas template. To do this create a `menu` variable using the [set](/docs/canvas/tags/set) tag, and assign the CMS menu object to it using the helper function:

```canvas {% process=false %}
{% set menu = cms.menu('main') %}

{% for item in menu.items %}
   <a href="{{ item.href }}">{{ item.label }}</a>
{% endfor %}
```

For more information about the `cms.menu()` function, read the [cms.menu function guide](/docs/canvas/functions/cms#menu).

## Adding content

Now that you have some pages and a menu, you might want to create some editable content. The first way to display content on your page is to use the `cms_{component}` functions. This will allow you to edit the content in Blutui Canopy, the in-page editor.

In this example we'll add a text area on your canvas. To do this you use `cms_text`:

```canvas {% process=false %}
{{ cms_text('hero-content') }}
```

Read the [cms_text](/docs/canvas/functions/cms-text) guide for more information about how to use it in a `Canvas`. You can find information about other available CMS components in the `Canvas > Functions` section of the documentation.

## Add data driven content

Now you have content, a navigation menu, a few pages and some editable content. While these content types are great for static content, what about dynamic data-driven content, like products, staff member, locations, galleries and more?

Introducing Blutui Collections, an easy way to create dynamic data-driven content using a wide range of data types.

### Basic collection

Like most content types in Blutui, it all starts in the site dashboard. Visit the **Collections** page using the navigation sidebar. You will be taken to a Collections only view, here click the **Create collection** button in the sidebar. When creating a collection you are defining the fields that you will later fill out with content. In this example we are adding a `text`, `textarea` and `image` data types:

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/collection1.gif)

You will notice that all data types require a value for the `Name` field, this is used to identify the data type in your code.

Let's create a template that will render this collection, to do this you need the collection handle. In this example the handle is `staff`. First create a `collections` folder in our Canvas `views` directory, and add a file called `staff.html`, with:

```canvas {% process=false filename="collections/staff.html" %}
{% set collection = cms.collection('staff') %}

{% for entry in collection %}
  <div>
    <img src="{{ entry.image }}" alt="{{ entry.title }}" />
    <h2>{{ entry.title }}</h2>
    <p>
      {{ entry.text }}
    </p>
  </div>
{% endfor %}
```

In this code example you are calling the collection, setting it to a `collection` variable and looping through each collection entry to display it the way you want. Once the collection template is created, you can [include](/docs/canvas/tags/include) it in your page template:

```canvas {% process=false filename="pages/about.html" %}
{% extends 'templates/default' %}

{% block body %}
  {% include 'collections/staff.html' %}
{% endblock %}
```

### Linking two collections

Now that you know how to create collections, you might want to link a collection with another so you don't have to add the same content twice in both collections.

In this example we'll create a **Locations** collection and link it to our **Staff** collection, from the previous example. This will allow us to dynamically set the location of each **Staff** member (entry), based on the collection entries of `Location` collection. This is a very simple process, done through the site dashboard. First go to the **Collection settings** of the collection you want to link from, in this case it would be the **Locations** collection, and click `Manage links`. From here click `New link`, select the field that you want to link and give it a `name`, just like you would for a collection data type:

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/collection2.gif)

To get the value of this link in your Canvas, you can access the `foreign_keys` in the collection entry object or for convenience you can call it directly from the `entry` object. For example:

```canvas {% process=false %}
{{ entry.foreign_keys.location }}
{{ entry.location }} {# This is only possible if your entry doesn't already have a location field. #}
```

### Routing collections

Now that you can create complex collections, you might want to render each collection item on its own page. In our example we might want to have a dedicated page for each staff member. For this you can define routing patterns.

**Steps:**

1. In your site dashboard, go to **Settings** from the navigation sidebar.
2. Click **Routing**.
3. Navigate to the **Patterns** tab and click the **Create pattern** button in the top right corner.
5. Select the pattern you need and set the `template`. In our example we want these collection pages to be `/staff/{slug}`. To create this pattern select the `string` type and set the value to **staff*, then select the `slug` type.

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/collection3.gif)

Add the following code in the **template** you set during the routing pattern creation process. The routing pattern template is a mix of a new page and a collection template:

```canvas {% process=false filename="pages/staff.html" %}
{% extends 'templates/default' %}

{# Set the staff collection to the collection variable #}
{% set collection = cms.collection('staff') %}
{# Filter the collection entries to find the first entry by the matching `title` field #}
{% set entry = collection | filter(entry => ((entry.title | slug) == route.data.slug)) | first %}

{% block body %}
  <!-- Collection code you want to display on this page -->
{% endblock %}
```

## Creating a form

Now lets add a contact form on your site. The process of making a form is similar to making a collection. Let's start in the **site dashboard**. From the navigation sidebar, go to **Forms** and click the **Create form** button on the bottom left of the page. From here give your new form a **Name**, the handle and form template path will automatically be created. Now you can add all the fields required for your form, you can set certain form fields as requried, add help text or placeholder text.

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/form.gif)

Now that your new form is created, lets add this form to your Canvas. At the top of the form template we want to [import](/docs/canvas/tags/import) `macros/form.html` into the `ui` variable, the file responsible for the markup and styling of your form inputs. We've created a form macro template to help you get started. You can find the code for the `macros/form.html` macro on [Gist](https://gist.github.com/jayan-blutui/228a410ebc3d0779011f019d0620ef1e). You can use the form macro like:

```canvas {% process=false filename="forms/contact.html" %}
{% import 'macros/form' as ui %}

{% form 'contact' %}
    <input type="hidden" name="redirect" value="/contact/success">  

    {% for field in form.fields %}
      {{ ui.field(field) }}
    {% endfor %}

    {{ recaptcha() }}

    <button type="submit" name="submit" value="Submit">Submit</button>
{% endform %}
```

If you would like to redirect the user after the form is submitted successfully, set a `redirect` URL. In the code above we redirect users to a `/contact/success` page. We also recommend you add `recaptcha` to your forms to prevent spam.

## Blogs

Blog posts are a great way to keep your users updated. Create an unlimited amount of blogs and blog posts for news about the company, announcements or even recipes (please share them with us). The process of making a blog for your project is simple, as it follows the same structure as other content types in Blutui. Using the navigation sidebar in the site dashboard navigate to **Blog posts** and create a new blog, which will later host your posts. You will need to add 2 templates, 1 for your blog and 1 for all the blog posts.

![](https://cdn.blutui.com/uploads/assets/Dev/getting-started/blogs.gif)

## Adding domains

Now that you have built your project it's time to add your domain(s) to it. To do this, go to your [Agency Console](https://console.blutui.com). From the navigation menu, navigate to **Domains** and click **Add domain**. Add you domain name, then select the **Project** you would like to add the domain to. Now you need to verify the ownership of the newly added domain(s). To verify your domain(s), click the `How to` guide under each domain for full list of instructions to follow.

Once you have added the DNS records on your domain, the process after this point is automated and will automatically become green once connected, depending on your DNS providers speed. Once your domain is connected Blutui will automatically create an SSL certificate to keep your project secure.

## Publishing

Lets do some last minute checks on your project before we publish it to the world. Make sure you can cross each item on this list:

1. Test the form(s)
2. Make sure all static content is editable (saves you from digging through the code later on).
3. Check all buttons and links are working as they should be.
4. Check the project's meta content, such as titles and descriptions for each page.
5. Test your project on multiple internet browsers.
6. Test your project's responsiveness.
7. Test your project on an actual mobile device.
8. Ensure your all your project domains are added to third-party systems such as ReCaptcha, Google Maps API, etc.

Now you are ready to **Publish** your project for the world to see. On to the next one!
