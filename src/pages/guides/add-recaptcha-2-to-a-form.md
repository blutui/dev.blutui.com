---
title: 'How do I add reCAPTCHA v2 to a form?'
description: 'Learn how to protect your forms with reCAPTCHA v2.'
---

## Introduction

Protecting your forms from spam and abuse is crucial. Google's reCAPTCHA v2 provides a reliable solution. In this guide, we'll explain how to integrate reCAPTCHA v2 with forms on a Blutui project.

## Setting Up reCAPTCHA v2

{% step title="Registration" position="1" %}
Start by visiting [Google reCAPTCHA's registration page](https://www.google.com/recaptcha/admin/create). Sign in using your Google account.
{% /step %}

{% step title="Create a new site" position="2" %}
Next, click on **Register a new site**. Provide a suitable name for your reCAPTCHA integration, ensure you select the reCAPTCHA type as **v2 Checkbox**.
{% /step %}

{% step title="Domain configuration" position="3" %}
Input all domains where your site will be live. It's advisable to also include your staging URL, ensuring you can test the form in the staging environment.
{% /step %}

{% step title="Alert settings" position="4" %}
Associate it with your primary Google account. If you're using older versions of reCAPTCHA, specify emails to receive alerts regarding any issues.
{% /step %}

{% step title="Complete registration" position="5" %}
Lastly, read and accept the terms of service and click **Submit**. Once registered, you'll receive two keys, a public key and a secret key. If you need further details or encounter any challenges while obtaining your reCAPTCHA keys, Google's [developer documentation](https://developers.google.com/recaptcha/intro) is a valuable resource.
{% /step %}

## Integrating with Blutui

{% step title="Navigate to settings" position="1" %}
Head to your Blutui Project Dashboard. Click on **Settings** and navigate to **Forms** page.
{% /step %}

{% step title="Key configuration" position="2" %}
Paste the **Public Key** and **Secret Key** from the reCAPTCHA dashboard into their respective fields in the Blutui Project Dashboard.
{% /step %}

{% step title="Update your form template" position="3" %}
Navigate to your form template code for the Blutui project. Insert the [`{{ recaptcha() }}`](/docs/canvas/functions/recaptcha) function where you'd like the reCAPTCHA checkbox to appear. Typically, it's best to place this right above the form's submit button.
{% /step %}

## Conclusion

You've now successfully integrated Google's reCAPTCHA v2 with your Blutui project. This will add an extra layer of protection against bots and spam, ensuring genuine user interactions on your project.
