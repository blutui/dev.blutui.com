---
title: 'Changelog'
description: 'A continuous stream of changes made to the Blutui platform.'
---

{% comment %}
Please use the ISO standard date and time format.
{% /comment %}

{% changelog date="2024-10-17" %}
{% badge status="success" %}Added{% /badge %}

- Added improved performance when loading the **Agency Console** in your web browser for the first time.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue in the **Agency Console** where the brand was not being shown.
{% /changelog %}

{% changelog date="2024-10-09" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed error handling for project form submissions.
{% /changelog %}

{% changelog date="2024-09-11" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with project webhooks sometimes not sending requests to the configured endpoint.
{% /changelog %}

{% changelog date="2024-08-20" %}
{% badge status="success" %}Added{% /badge %}

- Added improved support for project timezones.
{% /changelog %}

{% changelog date="2024-08-08" %}
{% badge status="success" %}Added{% /badge %}

- Added `members` resource in the [Console API](/api/console). You can now manage the role and access for team members in your agency through the API.
{% /changelog %}

{% changelog date="2024-07-26" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed `is_super` response parameter on the `role` resource in the [Console API](/api/console) to always return a `boolean`.
- Fixed the dates and times in the **Project Dashboard** to respect the timezone of the project.
{% /changelog %}

{% changelog date="2024-07-25" %}
{% badge status="success" %}Added{% /badge %}

- Added `role` resource in the [Console API](/api/console). You can now manage roles and permissions in your agency through the API.
{% /changelog %}

{% changelog date="2024-07-23" %}
{% badge status="success" %}Added{% /badge %}

- Added support for `controls` and `autoplay` HTML attributes in the [audio](/docs/canvas/functions/canopy/cms-audio) and [video](/docs/canvas/functions/canopy/cms-video) **Canopy** components.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed styling issue with the archived projects view in the **Agency Console**.
- Fixed issues related to touch devices when using **Canopy**.
{% /changelog %}

{% changelog date="2024-07-16" %}
{% badge status="success" %}Added{% /badge %}

- Added `agency` resource in the [API](/api/agencies/list). You can now manage your agency through the API.

{% badge status="info" %}Changed{% /badge %}

- Changed the `primary_domain_id` response property to `primary_domain` in the [`project` resource](/api/console/projects/retrieve#response) to make it consistent with the value passed to the `expand` query parameter.
{% /changelog %}

{% changelog date="2024-07-11" %}
{% badge status="success" %}Added{% /badge %}

- Added a `search` endpoint to the `project` resource in the [Console API](/api/console). You can now search for projects in your agency through the API.
{% /changelog %}

{% changelog date="2024-07-09" %}
{% badge status="success" %}Added{% /badge %}

- Added `project` resource in the [Console API](/api/console). You can now manage projects, including publishing, unpublishing, and viewing a project's domains directly in your agency through the API.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue where projects wouldn't show correctly when managing a team members access in the **Agency Console**.
{% /changelog %}

{% changelog date="2024-07-04" %}
{% badge status="info" %}Changed{% /badge %}

- Changed the Blutui authentication screens to make switching between [login](https://auth.blutui.com/login) and [register](https://auth.blutui.com/register) easier.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue where project domains wouldn't show correctly in the **Agency Console**.
{% /changelog %}

{% changelog date="2024-05-27" %}
{% badge status="info" %}Changed{% /badge %}

- Changed the "Project Domains" screen in the **Agency Console** to simplify the process of adding new domains to a project.

- Changed [Update domain](/api/console/domains/update) API to ensure a `project` parameter is required in the body of the request.
{% /changelog %}

{% changelog date="2024-05-20" %}
{% badge status="success" %}Added{% /badge %}

- Added `domain` resource to the [Console API](/api/console). This allows you to manage domains in your agency directly through the API.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed syntax error on the output of the **Blutui Canopy** `list` component.
{% /changelog %}

{% changelog date="2024-05-07" %}
{% badge status="success" %}Added{% /badge %}

- Added `brand` resource to the [Console API](/api/console). This allows you to manage your agency's brand directly through the API.

- Added [`blutui`](https://www.npmjs.com/package/blutui) Node.js SDK to simplify interaction with Blutui APIs.
{% /changelog %}

{% changelog date="2024-05-06" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed the order of form submissions in the form submission CSV export file.
{% /changelog %}

{% changelog date="2024-05-03" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed issues when creating a new role in the **Agency Console**.
{% /changelog %}

{% changelog date="2024-04-29" %}
{% badge status="info" %}Changed{% /badge %}

- Changed the look and feel of the Blutui authentication screens.
{% /changelog %}

{% changelog date="2024-04-17" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed rendering issues with the [`{% form %}` tag](/docs/canvas/tags/form).
{% /changelog %}

{% changelog date="2024-04-08" %}
{% badge status="info" %}Changed{% /badge %}

- Changed the site deletion feature in the **Agency Console** to permanently remove the site after a 30-day period. Previously, the site would be instantly deleted.
{% /changelog %}

{% changelog date="2024-03-25" %}
{% badge status="info" %}Changed{% /badge %}

- Changed the **Agency Console** URL from:
  - `blutui.com/app` -> `console.blutui.com`
- Changed the **Blutui API** URL from:
  - `blutui.com/api` -> `api.blutui.com/v1`
- Changed the **OAuth** URL from:
  - `blutui.com/oauth` -> `auth.blutui.com/oauth`
{% /changelog %}

{% changelog date="2024-03-15" %}
{% badge status="success" %}Added{% /badge %}

- Added 2 new API's to the platform:
  - `GET` `/v1/user` - Retrieve the current user.
  - `GET` `/v1/user/email` - Retrieve the current user's email address
{% /changelog %}

{% changelog date="2024-03-12" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to create Blutui OAuth apps through the **Agency Console**.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed the date format in the form submission CSV export.
{% /changelog %}

{% changelog date="2024-01-22" %}
{% badge status="success" %}Added{% /badge %}

- Added favicons for project images in the **Agency Console**.
- Added [`image_url`](/docs/canvas/filters/image_url) filter to the **Canvas** templating language, to allow you to retrieve an optimised image.

{% badge status="warning" %}Removed{% /badge %}

- Removed the refresh domain button on the domain list view in the **Agency Console**.
{% /changelog %}

{% changelog date="2024-01-15" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to add a SEO title and SEO description to blog posts in the **Project Dashboard**.
- Added the ability to view `webp` image thumbnails in the **Project Dashboard**.
{% /changelog %}

{% changelog date="2023-12-21" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to preview `.webp` and `.webm` files in the **Project Dashboard**.
- Added improved navigation to the user profile view in the **Agency Console**.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with buttons on the blog view in the **Project Dashboard**.
- Fixed an issue where buttons would sometimes appear white in email communications.
{% /changelog %}

{% changelog date="2023-10-20" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed the **Collection Link** UI in the **Project Dashboard**.
- Fixed an issue with updating payment methods in the **Agency Console**.
{% /changelog %}

{% changelog date="2023-10-17" %}
{% badge status="success" %}Added{% /badge %}

- Added new **[`{% form %}`](/docs/canvas/tags/form)** **Canvas** tag. Designed to improve the experience of creating forms in your **Canvas** files.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue in the **Project** routing system that sometimes caused a 404 page for dynamic pages.
{% /changelog %}

{% changelog date="2023-10-05" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed file uploads in the **Project Dashboard**.
{% /changelog %}

{% changelog date="2023-10-04" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed **Project** routing system to improve stability.
{% /changelog %}

{% changelog date="2023-09-22" %}
{% badge status="success" %}Added{% /badge %}

- Added support for adding content for multiple languages in the **Project Dashboard**.

{% badge status="info" %}Changed{% /badge %}

- Changed form submission email to include no branding.
{% /changelog %}

{% changelog date="2023-09-12" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to click an entry row to edit the collection entry in the **Project Dashboard**.
- Added the ability to view "Pending invitations" in the **Project Dashboard** user settings view.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed search links in the **Project Dashboard**.
{% /changelog %}

{% changelog date="2023-09-06" %}
{% badge status="success" %}Added{% /badge %}

- Added webhook support to projects. The first release of webhooks includes the following events:

  - `form.created`
  - `form.deleted`
  - `form.updated`
  - `form.submission.created`
  - `form.submission.deleted`
  - `post.created`

- Added updated settings UI in the **Project Dashboard**. It's now easier to see all available settings for a project.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed help text for code injection settings view in the **Project Dashboard**.
{% /changelog %}

{% changelog date="2023-07-28" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with links redirecting users to the development project, in the project admin bar.
{% /changelog %}

{% changelog date="2023-07-17" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with emails where the buttons where sometimes invisible.
{% /changelog %}

{% changelog date="2023-06-20" %}
{% badge status="warning" %}Removed{% /badge %}

- Removed **Blutui** logo from the project admin bar.
{% /changelog %}

{% changelog date="2023-06-08" %}
{% badge status="success" %}Added{% /badge %}

- Added a new and improved project creation system to the **Agency Console**.
- Added you agency's whitelabel logo to **Canopy** in your client's project.
{% /changelog %}

{% changelog date="2023-05-26" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed several minor UI inconsistencies in the **Project Dashboard**, including small changes to the form builder.
{% /changelog %}

{% changelog date="2023-05-18" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed several minor UI inconsistencies in the **Agency Console**.
{% /changelog %}

{% changelog date="2023-05-11" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to enable two-step authentication on the **Agency Console** to increase your account's security.
{% /changelog %}

{% changelog date="2023-05-01" %}
{% badge status="info" %}Changed{% /badge %}

- Changed emails sent (form submissions, invite user, etc.) by your projects to include your agency's logo.
{% /changelog %}

{% changelog date="2023-04-27" %}
{% badge status="success" %}Added{% /badge %}

- Added a brand new starter **Canvas** to show you how to get started with your newly created project.

{% badge status="info" %}Changed{% /badge %}

- Changed "Start building" component on the Project page in the **Agency Console**, to show more information on how to get started.
{% /changelog %}

{% changelog date="2023-04-17" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue in the **Project Dashboard** that showed two "Cancel" buttons.
- Fixed an issue in the **Agency Console** where the "Add domain" modal wouldn't suggest `www` for root domains.
- Fixed an issue in the **Agency Console** where the site tranfer list wouldn't show on the Projects page.
- Fixed an issue in the **Agency Console** where the "Archive project" modal wouldn't open.
{% /changelog %}

{% changelog date="2023-04-11" %}
{% badge status="info" %}Changed{% /badge %}

- Changed how production project's are cached to improve page load speed.
{% /changelog %}

{% changelog date="2023-03-09" %}
{% badge status="success" %}Added{% /badge %}

- Added improvements to Page URL's in the **Project Dashboard**, you can now create nested pages, eg. `/page/nested-page`.
- Added the ability to archive forms in the **Project Dashboard**.

{% badge status="info" %}Changed{% /badge %}

- Changed project archive UI in the **Agency Console**. You can now see when the project was archived.
- Changed form builder and collection builder delete confirmation message to be more descriptive.
{% /changelog %}

{% changelog date="2023-02-28" %}
{% badge status="info" %}Changed{% /badge %}

- Changed route pattern UI in the **Project Dashboard** by adding a visual difference for dynamic and static patterns.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with the search bar in the **Agency Console** domain UI.
{% /changelog %}

{% changelog date="2023-02-13" %}
{% badge status="info" %}Changed{% /badge %}

- Changed Agency selector to only show in the **Agency Console** if you're in more than 1 agency.

{% badge status="attention" %}Fixed{% /badge %}

- Number validation for Collection fields without a `min` or `max` value.
{% /changelog %}

{% changelog date="2023-02-03" %}
{% badge status="info" %}Changed{% /badge %}

- Changed **Collection Entries** and **Form Submissions** view in the **Project Dashboard** to show `3` values instead of `5` values per record.
{% /changelog %}

{% changelog date="2023-01-19" %}
{% badge status="success" %}Added{% /badge %}

- Added an improved domain management UI to the **Agency Console**.
{% /changelog %}

{% changelog date="2023-01-13" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to export form submissions as a CSV file.
- Added support for special characters in page titles.
{% /changelog %}

{% changelog date="2023-01-11" %}
{% badge status="success" %}Added{% /badge %}

- Added a new look and feel to the agency console navigation menu.
- Added the ability to limit access to projects for certain users. As an agency admin, you can now assign what projects are accessible for certain members of your team.
{% /changelog %}

{% changelog date="2022-11-23" %}
{% badge status="success" %}Added{% /badge %}

- Added the ability to search users in the project dashboard.
- Added an improved page create and update UI in the project dashboard.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue where newly added assets are added to the bottom of the assets view in the project dashboard.
{% /changelog %}

{% changelog date="2022-11-11" %}
{% badge status="success" %}Added{% /badge %}

- Added support to create longer form labels. You can now create form labels that are upto `511` characters in length.
- Added improved roles and permissions UI to the agency console.
{% /changelog %}

{% changelog date="2022-11-01" %}
{% badge status="info" %}Changed{% /badge %}

- Changed form submission UI to be more understandable by using the field label instead of the field name.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed forms UI to load forms and form submission faster.
- Fixed nested collections cache issue on Blutui projects.
{% /changelog %}

{% changelog date="2022-10-20" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed button theme across all Blutui applications to inherit agency whitelabel features, if activated on Blutui's agency plan.
{% /changelog %}

{% changelog date="2022-10-10" %}
{% badge status="success" %}Added{% /badge %}

- Added staging link next to the staging password field in the Agency Console.

{% badge status="info" %}Changed{% /badge %}

- Changed form creation flow. When creating a new form, you will no longer need to provide `handle` and `template` values, these values will automatically be filled based on the form name.
{% /changelog %}

{% changelog date="2022-10-07" %}
{% badge status="success" %}Added{% /badge %}

- Added a loading state on buttons when performing actions in the Agency Console and Project Dashboard.
{% /changelog %}

{% changelog date="2022-09-05" %}
{% badge status="info" %}Changed{% /badge %}

- Changed admin bar design. The new admin bar has a much smaller footprint and has been moved to the bottom left corner.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with Canopy components not rendering correctly when it has no value.
{% /changelog %}

{% changelog date="2022-09-02" %}
{% badge status="success" %}Added{% /badge %}

- Added a new onboarding experience. You might notice that the next time you login to your agency console, you will be asked a few questions, these questions will help the platform display content that is most relevant to you.
{% /changelog %}

{% changelog date="2022-07-05" %}
{% badge status="success" %}Added{% /badge %}

- Added Canvas filters to easily create HTML tags. [`image_tag`](/docs/canvas/filters/image_tag), `script_tag` and `stylesheet_tag` have been added.
- Added much needed speed boost to Collections. Collections are now 2.5x - 3x more faster than before.
{% /changelog %}

{% changelog date="2022-05-27" %}
{% badge status="success" %}Added{% /badge %}

- Added agency branding to the staging password page.

{% badge status="warning" %}Removed{% /badge %}

- Removed mention of "Powered by Blutui".
{% /changelog %}

{% changelog date="2022-05-26" %}
{% badge status="info" %}Changed{% /badge %}

- Changed collection creation flow. Now when you create a new Collection, all you need to do is give it a name and the `handle` is automatically created.
{% /changelog %}

{% changelog date="2022-05-17" %}
{% badge status="success" %}Added{% /badge %}

- Added improved site transfer system.
- Added improved agency user invitation system.
{% /changelog %}

{% changelog date="2022-04-14" %}
{% badge status="attention" %}Fixed{% /badge %}

- Fixed an issue with date and time format when viewed in Safari.
{% /changelog %}

{% changelog date="2022-03-28" %}
{% badge status="info" %}Changed{% /badge %}

- Changed DNS automatic verification to only verify domains that are linked to a project.
{% /changelog %}

{% changelog date="2022-03-16" %}
{% badge status="success" %}Added{% /badge %}

- Added support for `.webm` files in your project's assets area.

{% badge status="attention" %}Fixed{% /badge %}

- Fixed DNS automatic verification to be more efficient when adding new domains.
{% /changelog %}

{% changelog date="2022-02-16" %}
{% badge status="success" %}Added{% /badge %}

- Added autocomplete template paths. Now in your project dashboard you can select a Canvas template from the dropdown or add your own path if you haven't created the template yet.

{% badge status="info" %}Changed{% /badge %}

- Changed preferred developer community channel from Slack to [Discord](https://discord.gg/4H8dZW6Fva). Come join us on [Discord](https://discord.gg/4H8dZW6Fva), hang out with the Blutui developer team and ask us questions.

{% /changelog %}
