---
title: 'How do I send form submissions to Zapier?'
description: 'Information on how to send form submissions from a Blutui project to Zapier.'
---

## Introduction

Webhooks can be triggered whenever specific events occur in your Blutui Project. You must have access to the project dashboard to create webhooks. For example you can configure a webhook to trigger whenever a form is submitted on a project.

In this guide we'll learn how to subscribe to the `form.submission.created` event and send a webhook request to [Zapier](https://zapier.com/apps/webhook). You can use Zapier to automate your Blutui project workflows by sending form submission to a Google Sheet, Slack, Mailchimp, and much more.

## Prerequisites

- [Paid Zapier plan](https://zapier.com/pricing) to use the Webhooks Zap.
- Admin access to a Blutui Project.
- A pre-built form on your Blutui Project.

## Setup

{% step title="Create a new Zap" position="1" %}
Firstly, let's create a new Zap in Zapier. From your Zapier dashboard, click the **Create Zap** button or go to [zap.new](https://zap.new/).

![](https://cdn.blutui.com/uploads/assets/Dev/guides/form-submission-created-zapier-1.png)
{% /step %}

{% step title="Select the webhook trigger" position="2" %}
Click the **Trigger** button to add the **Webooks by Zapier** trigger. Use the search bar if the trigger is not visible. Then select the **Catch Hook** event type.

![](https://cdn.blutui.com/uploads/assets/Dev/guides/form-submission-created-zapier-2.png)
{% /step %}

{% step title="Retrieve your webhook URL" position="3" %}
After selecting your event type, you will be taken to the **Trigger** step. Click continue to proceed to the **Test** step. You will be presented with your webhook URL.

![](https://cdn.blutui.com/uploads/assets/Dev/guides/form-submission-created-zapier-3.png)
{% /step %}

{% step title="Add your webhook URL to the Blutui Project" position="4" %}
Next, copy your webhook URL. From your Blutui Project Dashboard, click the **Settings** page and navigate to **Webhooks**.

1. Click **Add endpoint** to create a new event subscriber.
2. Paste your Zapier webhook URL into the **Endpoint URL** field.
3. Click the **Select events** button.
4. Select the `form.submission.created` event. For the purpose of this guide we'll only select 1 event to subscribe to.
5. Click **Add endpoint** to create the event subscriber for the project.

![](https://cdn.blutui.com/uploads/assets/Dev/guides/form-submission-created-zapier-4.png)
{% /step %}

{% step title="Test the form submission event" position="5" %}
Now that we've created a webhook endpoint and subscribed to the `form.submission.created` event, lets test it by submitting a form. Once you have submitted a form on your project's frontend, we can test the Trigger in Zapier is setup correctly. Click the **Test trigger** button in Zapier to load any requests that were triggered by the Blutui project.

![](https://cdn.blutui.com/uploads/assets/Dev/guides/form-submission-created-zapier-5.png)
{% /step %}

{% step title="Select a test record" position="6" %}
Once the requests have finished loading, select a request to continue to the Action step.

![](https://cdn.blutui.com/uploads/assets/Dev/guides/form-submission-created-zapier-6.png)
{% /step %}

And there you have it—a complete guide to sending webhook requests to Zapier from a Blutui project. You can learn more about how to [setup an Action in Zapier](https://help.zapier.com/hc/en-us/articles/8496257774221) from their help center.
