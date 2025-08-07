---
title: 'How do I send form submissions to an email address?'
description: 'Information on how to send form submission from a Blutui project to an email address.'
---

## Introduction

Email integration with your Blutui forms ensures that you promptly receive form submissions directly to your preferred email address. This guide elucidates the steps to seamlessly incorporate an email address to your Blutui form and utilise additional features like dynamic form submissions.

## Setting Up a verified email

{% step title="Navigate to verified emails" position="1" %}
Head over to the project dashboard. Click on **Settings** and navigate to the **Verified emails** page.
{% /step %}

{% step title="Add an email address" position="2" %}
Input the email address to which you'd like to receive form submissions and click **Send**. A verification email will be sent to the inputed email address. Open the received mail and click the **Verify** button. A web page will load, confirming a successful verification.
{% /step %}

{% step title="Link the verified email to a form" position="3" %}
Return to the project dashboard. Click on **Forms**, then select your desired form and click on the **View form** button located in the top right corner. Insert the verified email address into the **Send submission to** input field in the right sidebar.
{% /step %}

## Advanced email configuration

{% step title="Utilising the 'Reply-To' feature" position="1" %}
If your form includes an `email` field, you can set that field to be the 'Reply-To' address. This allows you to directly reply to the email address from which the form submission originated.
{% /step %}

{% step title="Carbon Copy (CC) and Blind Carbon Copy (BCC)" position="2" %}
Additional options to CC or BCC other email addresses are available. This ensures multiple stakeholders can be kept in the loop.
{% /step %}

{% step title="Dynamic email submissions" position="3" %}
Blutui allows form submissions to be routed to different emails based on specific form field values, such as a `radio` or `select` option. For instance, if you have a 'Location' dropdown in your form, submissions can be directed to different email addresses based on the selected location.
{% /step %}

{% step title="Configuring dynamic submissions" position="4" %}
Below the **Send submissions to** input field, locate and click the **Dynamic form submission** link. A modal will pop up, prompting you to set up dynamic email routing. Click **Add email address**. Select the specific form field that you wish to set as the trigger, note that only `radio` or `select` fields are shown. Define the value that, when chosen, triggers the dynamic email routing. Input the email address to which submissions with the defined value should be sent. Ensure this email is verified, as per the steps outlined earlier.
{% /step %}

## Conclusion

You've successfully incorporated email functionalities into your Blutui form. This setup ensures that you receive timely notifications of form submissions, have the flexibility to reply directly, and can dynamically route submissions based on form content, thereby streamlining your communications.
