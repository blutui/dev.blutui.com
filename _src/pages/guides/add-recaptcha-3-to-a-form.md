---
title: 'How do I add reCAPTCHA v3 to a form?'
description: 'Learn how to protect your forms with reCAPTCHA v3.'
---

## Introduction

Google's reCAPTCHA v3 offers an advanced protection method for your forms without user interaction, ensuring a better user experience while still shielding your site from bots and spam. This guide walks you through integrating reCAPTCHA v3 with forms on a Blutui project.

## Setting Up reCAPTCHA v3

{% step title="Registration" position="1" %}
Start by visiting [Google reCAPTCHA's registration page](https://www.google.com/recaptcha/admin/create). Sign in using your Google account.
{% /step %}

{% step title="Create a new site" position="2" %}
Next, click on **Register a new site**. Provide an appropriate name for your reCAPTCHA integration, ensure you select the reCAPTCHA type as **v3**.
{% /step %}

{% step title="Domain configuration" position="3" %}
Input all domains where your site will be live. It's advisable to also include your staging URL, ensuring you can test the form in the staging environment.
{% /step %}

{% step title="Alert settings" position="4" %}
Associate it with your primary Google account. If you're using older versions of reCAPTCHA, specify emails to receive alerts regarding any issues.
{% /step %}

{% step title="Complete registration" position="5" %}
Lastly, read and accept the terms of service and click **Submit**. Once registered, you'll receive two keys, a **public key** and a **secret key**. If you need further details or encounter any challenges while obtaining your reCAPTCHA keys, Google's [developer documentation](https://developers.google.com/recaptcha/intro) is a valuable resource.
{% /step %}

## Integrating with Blutui

{% step title="Navigate to settings" position="1" %}
Head to your Blutui Project Dashboard. Click on **Settings** and navigate to **Forms** page.
{% /step %}

{% step title="Key configuration" position="2" %}
Paste the **Public Key** and **Secret Key** from the reCAPTCHA dashboard into their respective fields in the Blutui Project Dashboard.
{% /step %}

{% step title="Form ID configuration" position="3" %}
Within your form element, assign an ID. For this guide, we'll use contact as the ID:

```canvas
<form id="contact" method="POST" action="{{ request.url }}" enctype="multipart/form-data">
```
{% /step %}

{% step title="Embedding the JavaScript function" position="4" %}
Within your `<form>` tag code, prior to the `submit` button, insert the following JavaScript function:

```canvas
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
   function onSubmit(token) {
     document.getElementById("contact").submit();
   }
</script>
```

Ensure the ID within `getElementById()` function matches the ID you assigned to your form.
{% /step %}

{% step title="Adjusting the submit button" position="5" %}
Modify your form's submit button to include reCAPTCHA v3 attributes:

```canvas
<button
	class="g-recaptcha"
	data-sitekey="{{ settings.forms_recaptcha_key }}"
	data-callback='onSubmit'
	data-action='submit'
>
	Submit
</button>
```

Important attributes to note are `g-recaptcha`, `data-sitekey`, `data-callback`, and `data-action`.
{% /step %}

## Conclusion

Congratulations! You've now incorporated Google's reCAPTCHA v3 into a form on a Blutui project. This integration ensures a seamless user experience, all the while adding an advanced layer of security against spam and bots.
