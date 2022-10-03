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

Blutui Courier is a cross-platform command line tool that is used to build Blutui projects locally.

If you haven’t already, now is the time to install `Blutui Courier`. To install Blutui Courier follow the [Getting Started with Blutui Courier](/docs/courier/getting-started) guide.

## Creating a new page

First lets create a new page on your newly created project.

{% image src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/addingapage.gif" alt="Adding a page" /%}

**Steps:**

1. Login to your newly created project. You can quickly log into your project through the **Projects** page on your [Agency Console](https://blutui.com/app).
2. Once logged in, from the **Site Dashboard**, navigate to **Pages** using the navigation sidebar and click the **Add page** button at the top right side of the page.
3. Enter the required information for your page. The **Layout** is the file path to the page template. For best practice it is recommended that you create your page templates in the `pages` directory of your Canvas.
4. If you have not created the page template, go to the `pages` directory in your Canvas template files and add create your  new page layout. For example if you set the `Layout` to `pages/about.html`, add `about.html` to your `pages` directory.

In your newly created Canvas template add the following code:

```twig {% process=false %}
{% extends 'templates/default' %}

{% block body %}
  <!--This is where your page code goes-->
{% endblock %}
```

For more information on the Canvas templating language, read the [Getting started with Canvas](/docs/canvas/getting-started/overview) guide.

## Add a navigation menu

Now that you know how to make pages, let's look at creating a navigation menu.

{% image src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/menu.gif" alt="Creating a menu" /%}

**Steps:**

1. To create a navigation menu, navigate to the **Menus** page through the sidebar in your projects **Site Dashboard**.
2. Click on the **Create menu** button on the top right of the page.
3. Give your new menu a **Name**, add items to your menu, and set a **Handle**. A **Handle** is used in your Canvas template to create a reference to the CMS object.

Now that you have a menu, let's learn how to add it to your Canvas template. To do this create a `menu` variable using the [set](/docs/canvas/tags/set) tag, and assign the CMS menu object to it using the helper function:

```twig {% process=false %}
{% set menu = cms.menu('main') %}

{% for item in menu.items %}
   <a href="{{ item.href }}">{{ item.label }}</a>
{% endfor %}
```

For more information about the `cms.menu()` function, read the [cms.menu function guide](/docs/canvas/functions/cms#menu).

## Adding content

Now that you have some pages and a menu, you might want to create some editable content. The first way to display content on your page is to use the `cms_{component}` functions. This will allow you to edit the content in Blutui Canopy, the in-page editor.

In this example we'll add a text area on your canvas. To do this you use `cms_text`:

```twig
{{ cms_text('hero-content') }}
```

Read the [cms_text](/docs/canvas/functions/cms-text) guide for more information about how to use it in a `Canvas`. You can find information about other available CMS components in the `Canvas > Functions` section of the documentation.

## Collection

Now you have some content, a menu, a few pages and a set of editable content. These content types are great for static content but what about dynamic content, like products, staff member, locations, galleries and more?

Introducing collections, an easy way to create dynamic content using a wide range of data types.

### Basic Collection

Like most items in Blutui it starts in the Site Dashboard. You want to go to `Collections` and click `Create collection`. When creating a collection you are setting the fields that you will fill out with content. In this example we are adding a title field, text area and an image data type:

<media src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/collection1.gif" alt="Adding a collection"></media>

The value of the `Name` field is used to identify the data type in your code. This is the recommended way to render the collection where you want.

Let's create a template that will render this collection. In this example we called the handle `staff`, we can create a `collections` folder in our Canvas `views` directory called `staff.html`:

```twig {% process=false %}
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

In this example you are calling the collection, setting it to a `collection` variable and looping through each collection entry to display it the way you want.

### Linking two collections

Now that you have a collection, you might want to link a collection with another so you don't have to add the same content twice in both collections.

In this example we'll create a `Location` collection and link it to our `Staff` collection, from the previous example. This will allow us to dynamically set the location of each Staff entry, based on the collection entries of `Location` collection. This is a very simple process. You go to the collection you want to link from and click `Manage links`. From here click `New Link`, select the feild that you want to link and a name to call this link:

<media src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/collection2.gif" alt="Linking a collection"></media>

To get the value of this link in your Canvas, you can access the `foreign_keys` in the collection entry object. For example:

```twig {% process=false %}
{{ entry.foreign_keys.location }}
```

### Routing collections

Now that you can create complex collections, you might want to render each collection item on its own page. In our example we might want to have a dedicated page for each staff member. For this you can define routing patterns. To create a routing pattern for a collection:

**Steps:**

1. Go to `Settings`.
2. Click `Routing`.
3. Click the `Patterns` tab.
4. Click the `+` in the bottom right corner.
5. Select the patterns you need and set the template. In our example we want these collection pages to be `/staff/{slug}`.

<media src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/collection3.gif" alt="Routing a collection"></media>

You then want to add the following code in the template you set during the routing pattern creation process. The routing pattern template is a mix of a new page and a collection template: 

```twig {% process=false %}
{% extends 'templates/default' %}

{# Set the collection to the collection variable #}
{% set collection = cms.collection('staff') %}
{# Filter the collection entries to find a collection by the `title` field #}
{% set entry = collection | filter(entry => ((entry.title | slug) == route.data.slug)) | first %}

{% block body %}
  <!-- Code you want to display on this page -->
{% endblock %}
```

## Forms

Now lets add a contact form on your site. Blutui makes the process of making a form simple. It's done similar to making a collection. As normal you create the form in site dashboard. To do this you go to `Forms` and click `Create Form`. From here give it a `Name`, `Handle` and the `Form template` location. Now you can add all the fields that you want in your form, you can set the form fields to be requried, add help text and/or placeholder text.

<media src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/form.gif" alt="Adding a form"></media>

Lets add this form to your code. At the top we want to link `macros/form.html` since this is where you style your form inputs. The template below is to let you display the input fields the way you want. You can find the code for the `macros/form.html` macro below:

<div class="space-y-3">
  <card href="https://gist.github.com/jayan-blutui/228a410ebc3d0779011f019d0620ef1e" title="macros/form.html" target="_blank" rel="noopener noreferrer">
    Blutui form macro.
  </card>
</div>

The form template:

```twig {% process=false %}
{% import file('macros/form') as ui %}

{{ form_open() }}
    <input type="hidden" name="_form" value="{{ form._form }}">
    <input type="hidden" name="redirect" value="/contact/success">  

    {{ ui.field(form.firstname) }}

    {{ ui.field(form.lastname) }}
 
    {{ ui.field(form.email) }}
  
    {{ ui.field(form.phone) }}

    {{ ui.field(form.message) }}

    {{ recaptcha() }}

    <button type="submit" name="submit" value="Submit">Submit</button>
{{ form_close() }}
```

You can redirect a user when a form is submitted successfully, by setting a `redirect` URL. In the code above we redirect users to a `/contact/success` page. We also recommend for you to add `recaptcha` to your forms to prevent spam.

## Blogs

Blog posts are a great way to keep your users updated. Create an unlimited amount of blogs and blog posts for news about the company, announcements or even recipes. The process of making a blog for your site is simple as it follows the same structure as other content types in Blutui. First you start off in the site dashboard where you got to Blogs and create your blog. You will need to add 2 templates one for your blog and 1 for all the blog posts.

<media src="https://cdn.blutui.com/uploads/assets/Dev/getting-started/blogs.gif" alt="Making a blog"></media>

More information about blogs coming soon.

## Domains

Now that you have built your Blutui site it's time to add your domain(s) to it.

To do this, go to your [Blutui Console](https://blutui.com/app). Click on `Domains` and add your domain. Then select the `Site` you would like to add the domain to. Now you need to verify the ownership of the newly added domain(s). To verify your domain(s), click the `How to` guide under each domain for full list of instructions to follow.

Once you have added the DNS records on your domain, the process after this point is automated and will come up green and connected depending on your DNS providers speeds. Once your domain is connected Blutui will automatically create an SSL certificate to keep your site secure.

## Publishing

Lets do some last minute checks on your website before we publish it to the world. Make sure you can cross each the items on this list, since they help with user experience:

- Test the form(s)
- Make sure all static content is editable (Saves you from digging through the code later on).
- Check all buttons and links are working as they should be.
- Check site meta content.
- Test site on multiple internet browsers.
- Test site responsiveness.
- Test site on mobile device(s).
- Add all domains to ReCaptcha and Maps API

Now you are ready to `Publish` your site for the world to see. On to the next one!
