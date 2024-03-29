---
title: 'IntelliSense'
description: 'Intelligent Blutui tooling for Visual Studio Code.'
---

Blutui IntelliSense enhances the Blutui development experience. This is by providing Visual Studio Code users with advanced features like, autocomplete, syntax highlighting and snippets.

![Autocomplete](https://cdn.blutui.com/uploads/assets/Intellisense/varible-getting.png)

Search for `blutui` on the [Visual Studio Code Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=blutui.intellisense)

## Key Features

### Snippets

These snippets are useful for anyone needing to write blutui fuctions and example of this is `!if` would change to:

```canvas {% process=false %}
{% if item == true %}
 
{% endif %}
```

#### List of snippets

- !page
- !template
- !include
- !form-macro
- collection
- form
- !if
- !for-collections
- !for
- !apply
- !do
- !autoescape
- !set
- cms_audio
- cms_button
- cms_code
- cms_embed
- cms_heading
- cms_image
- cms_list
- cms_quote
- cms_text
- cms_video
- asset
- dump
- cms.blog
- cms.collection
- cms.form
- cms.menu

### Syntax Highlighting

It's better than not having syntax highlighting.

### Autocomplete

This uses your courier.json file to get collection handles. These handles will come up in a html file when using `entry.` or `item.`. Just make sure that you set the collection to be ``entry`` or `item` so it would work.

Also with auto complete open and closing brackets `{% %}`, `{{ }}` and `{# #}`
