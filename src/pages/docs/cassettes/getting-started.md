---
title: 'Cassettes'
description: 'Learn how to use cassettes in Blutui'
---

Blutui cassettes are a version control system for the front-end logic of your website. They provide a simple and efficient way to manage and switch between different website designs for a single site. This is particularly useful for seasonal events, special promotions, or any scenario where you need a distinct look and feel for your website without creating an entirely new one.

## How do Cassettes Work?

Blutui tracks changes within the **public** and **views** directories of your project. These directories contain the front-end logic of your site. When you use the `courier push` command, these changes are uploaded to a specific cassette.

The cassette to which your changes are pushed is determined by the cassette attribute in your **courier.json** file. By changing this attribute, you can direct your development efforts to a different cassette, allowing you to work on multiple versions of your site simultaneously.

## Managing Cassettes

You can manage your cassettes through the Blutui Agency console. Here's a typical workflow:

![Duplicate a Cassette](https://cdn.blutui.com/uploads/assets/Dev/cassettes/duplicate-cassette.png)

- Duplicate a Cassette: To create a new version of your site (e.g., a Christmas theme), you can duplicate an existing cassette from the Agency console. This creates a new, identical copy of your site's front-end logic.

```json {% process=false filename="courier.json" %}
{
  "$schema": "https://dev.blutui.com/schemas/v1/schema.json",
  "cassette": "[cassette-name]",
  "handle": "[project-handle]"
}
```

- Switch Cassettes Locally: Update the cassette attribute in your **courier.json** file to the name of the Active cassette. Now, any changes you make and push will be applied to this new version.

- Develop and Test: You can now develop your new site version (e.g., add Christmas-specific styles, layouts, and content) without affecting your live website.

- Go Live: Once you are satisfied with the new cassette, you can make it the live version of your site. This is done in the Agency console by selecting the **Active cassette** from a dropdown list and clicking the **Update** button.

{% callout type="note" %}
The change is immediate, and your new site UI will be visible to all visitors.
{%/callout %}

---

### What's Next? Understanding Collections

Now that you know how to manage cassettes, you can start developing your data structure using Blutui Collections. Collections allow you to manage your site's content, making it easier to create dynamic and engaging web experiences which are easily editable.

Continue to the [Blutui Collections]() to begin managing your site's content and structure effectively.
