---
title: 'How do I make a form in a Blutui project?'
description: 'Learn how to create and add a form to a Blutui project.'
---

## Introduction

Creating forms in Blutui can be an intuitive process. This guide provides a detailed step-by-step instruction on setting up a form, along with integrating it into your website.

## Creating a form

{% step title="Navigate to forms" position="1" %}
Head to your Blutui Project Dashboard. Click on **Forms** to access the forms section of the dashboard.
{% /step %}

{% step title="Create a new form" position="2" %}
From the **Forms** screen, click on the **Create form** button. A modal will appear, prompting you to enter a name for your form. The name will automatically be converted into a slug format for the handle. You can opt to use a custom handle by clicking on **Use custom handle**.
{% /step %}

{% step title="Add form fields" position="3" %}
Once your new form is created, you'll be redirected to the form settings page. Here you can add the desired fields for the form. In our example, we'll create the `Name`, `Email`, and `Message` fields.

Click **Add field** and select the **Text** option for the `Name` field. Label it as 'Name'. Assign a unique name to reference in your code, e.g., 'name'. Optionally, add help text (e.g., "Please put your name here"). Ensure you mark the field as 'Required'.

Similarly, add the Email (using the `email` type) and Message (using the `textarea` type).

![](https://cdn.blutui.com/uploads/assets/Dev/guides/create-form-1.png)
{% /step %}

{% step title="Save the form" position="4" %}
Click the **Update form** button to save your changes.
{% /step %}

## Add the form to your project code

{% step title="Directory setup" position="1" %}
Create a new folder named `forms` inside the `views` directory. Inside the `forms` folder, create a file named `contact.html`.
{% /step %}

{% step title="Create a form component system" position="2" %}
Next, we'll use a system named [macro](/docs/canvas/tags/macro) to help define input types and their output structure. If you don't already have a `components` folder, create one in the `views` directory. Inside the `components` folder, create a file named `form.html`. Paste the code below into `form.html` to define various form elements. These macros serve as templates for each type of form input, allowing flexibility in form design:

```canvas {% process=false %}
{# Input #}
{% macro input(data) %}
  <input type="{{ data.type }}" name="{{ data.name }}" value="{{ data.value }}" placeholder="{{ data.placeholder }}" {% if data.required %} required {% endif %} class="" />
{% endmacro %}

{# Textarea #}
{% macro textarea(data) %}
  <textarea type="{{ data.type }}" name="{{ data.name }}" value="{{ data.value }}" placeholder="{{ data.placeholder }}" {% if data.required %} required {% endif %} class=" " ></textarea>
{% endmacro %}

{# Checkbox #}
{% macro checkbox(data) %}
  {% for item in data.options %}
    <label class="">
      <input type="checkbox" name="{{ data.name }}[]" value="{{ item.value }}" />
      <span class="">{{ item.value }}</span>
    </label>
  {% endfor %}
{% endmacro %}

{# Radio Button #}
{% macro radio(data) %}
  {% for item in data.options %}
    <label class="">
      <input type="radio" name="{{ data.name }}" value="{{ item.value }}" />
      <span class="">{{ item.label }}</span>
    </label>
  {% endfor %}
{% endmacro %}

{# Select Menu #}
{% macro select(data) %}
  <div class="">
    <select name="{{ data.name }}" value="{{ data.value }}" class="">
      {% for item in data.options %}
        <option value="{{ item.value }}">{{ item.value }}</option>
      {% endfor %}
    </select>
  </div>
{% endmacro %}

{# Error Messages #}
{% macro errors(data) %}
  <span class="">{{ data }}</span>
{% endmacro %}

{# Form Field #}
{% macro field(data) %}
  <div class="">
    <label for="{{ data.name }}" class="">{{ data.label }}{% if data.required %} <span>*</span> {% endif %}</label>
    {% if data.type == 'checkbox' %}
      {{ _self.checkbox(data) }}
    {% elseif data.type == 'radio' %}
      {{ _self.radio(data) }}
    {% elseif data.type == 'select' %}
      {{ _self.select(data) }}
    {% elseif data.type == 'textarea' %}
      {{ _self.textarea(data) }}
    {% else %}
      {{ _self.input(data) }}
    {% endif %}
    <span>{{ data.help_text | escape }}</span>
    {{ _self.errors(data.errors) }}
  </div>
{% endmacro %}
```

Feel free to customise the appearance and layout by modifying the provided HTML and adding CSS styles.
{% /step %}

{% step title="Form integration" position="3" %}
Inside your `views/forms/contact.html` file, insert:

```canvas {% process=false %}
{% set form = cms.form('contact') %}
{% import 'components/form' as ui %}

<form id="" method="POST" action="{{ request.url }}" enctype="multipart/form-data">
  {{ csrf_field() | raw }}
  {{ honeypot_field() | raw }}
  <input type="hidden" name="_form" value="{{ form.handle }}">
    
  {% for field in form.fields %}
    {{ ui.field(field) }}
  {% endfor %}
    
  <button type="submit" class="">Submit</button>
</form>
```

This will setup the form and import the `components/form.html` file we created in the previous step. It includes security measures, such as `csrf_field()`, `honeypot_field()` and a hidden input for `_form`. The code loops through each field and renders them based on their type. This approach will allow content creators to add more fields in the future directly from the dashboard.

You can directly reference individual form fields using `{{ ui.field(form.fields.name) }}` or `{{ ui.field(form.fields['name']) }}`. Lastly add a form submission button at the end.
{% /step %}

{% step title="Embedding the form on a page" position="4" %}
To display the form on any page or section, use `{% include 'forms/contact' %}` snippet to embed the form at the desired location in your page code.
{% /step %}

## Conclusion

By following these steps, you can seamlessly integrate a customisable form into your Blutui project. Remember to modify and style the form to align with your project's design and needs.
