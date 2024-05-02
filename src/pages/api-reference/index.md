---
title: API reference
description: Blutui API reference contains detailed API information for the Console, Admin and Site APIs
---

## Explore the Blutui API references

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui';

const blutui = new Blutui('');

blutui.agency('twitch').domains.get('9ac9ab77-87a8-444e-8c58-abf05a40c9cd');
blutui.agency('twitch').domains.list();
```

```php {% process=false filename="PHP" %}
$blutui = Blutui::client();

$blutui->agency('twitch')->domains->get('9ac9ab77-87a8-444e-8c58-abf05a40c9cd');
$blutui->agency('twitch')->domains->list();
```

```bash {% process=false filename="cURL" %}
curl -X GET 'https://api.blutui.com/v1/agencies/twitch/domains/9ac9ab77-87a8-444e-8c58-abf05a40c9cd' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% card title="Console API" href="/api/console" %}
  Scale and manage your agency's projects, domains, teams, and more.
{% /card %}

{% card title="Admin API" href="/api/admin" %}
  Manage a project's collections, form, pages, and more using the Project Admin API.
{% /card %}

{% card title="Project API" href="/api/project" %}
  Build custom experiences for any platform. Render project information on any surface, such as web, mobile, games, and more.
{% /card %}
