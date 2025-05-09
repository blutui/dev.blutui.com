---
title: 'How do I use AI Components in my Blutui project?'
description: 'Learn how to use AI Components in your Blutui project.'
---

## Introduction

Blutui AI Components accelerates the development of your Blutui site by enabling you to generate custom components. This facilitates easy editing within Canopy, Blutui's site editing interface.

## Prerequisites

- [A Blutui project set up and ready to go](https://dev.blutui.com/docs/getting-started/create)
- [Tailwind CSS](https://dev.blutui.com/guides/use-tailwind-css-in-a-project)

## Getting started

{% step title="Access Blutui AI Components" position="1" %}

- Navigate to [Blutui AI Components](https://blutui.ai).
- If you don't have an account, create a Blutui login by signing up on the AI app.

{% /step %}

{% step title="Generate Components" position="2" %}

Once logged in, you can start typing the description of the component you want to generate in the **Generate Component** textbox.

Optionally, you can choose a component from the available bubbles.

![Blutui AI Components textbox](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/prompt-v2.png)

After describing your desired component, click the submit icon.
Your component will now be generated.

{%prompt%}
Give me a Our Prices section in dark theme with a pricing table.
{%/prompt%}

![Generated Component](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-1.png)

{% /step %}

{% step title="Refine Your Components" position="3" %}

After generating your component, you can iterate and refine it to better suit your needs.

{%prompt%}
Make the buttons pink.
{%/prompt%}

![Refined Component](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-2.png)

You can keep refining your component until you are happy with it.

{% /step %}

{% step title="View UI or Code for Each Iteration" position="4" %}

After each iteration, you have the option to view either the visual representation of the component or its code.

![UI and Code buttons](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-3.png)

Click on the **UI** button to preview the component's appearance based on the latest changes.
Click on the **Code** button to see the updated code, which you can copy and integrate directly into your Blutui project.
This allows you to toggle between the component's look and its code at every stage, making customization simple and intuitive.

{% /step %}

{% step title="Edit the Code in Real-Time" position="5" %}

![Code editing](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-4.png)

When you click on the **Code** button, you can directly edit the component’s code. Any changes you make will instantly update the UI preview on the left side of your screen, allowing you to see your adjustments in real time.
Once you're satisfied with the modifications, click **Save Changes** to keep them.

If you decide not to apply the changes, you can simply choose **Discard** to revert to the previous version.
This feature gives you full control over fine-tuning the component’s design and functionality.

{% /step %}

{% step title="Using your generated component in a Blutui project" position="6" %}

Copy the generated component code by clicking on the **Code** button for that components iteration.

![Generated Code](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-6.png)

Open your Blutui project and paste the code.

![Paste Code on Blutui project](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-7.png)

View the changes.

![Canopy preview](https://cdn.blutui.com/uploads/assets/Dev/guides/ai-components/v2-8.png)
{% /step %}

## Additional Resources

- Refer to the [Blutui CMS functions](https://dev.blutui.com/docs/canvas/functions/cms) for detailed information on how these functions work.
- For an overview of Canopy and how to use it, visit the [Canopy overview](https://help.blutui.com/dashboard/site-dashboard/canopy/canopy-overview).

## Conclusion

You've now successfully integrated AI Components with your Blutui project.
