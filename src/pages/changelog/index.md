---
title: 'Changelog'
description: 
toc: false
---

{% comment %}
Please use the ISO standard date and time format.
{% /comment %}

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

- Added Canvas filters to easily create HTML tags. `image_tag`, `script_tag` and `stylesheet_tag` have been added.
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
