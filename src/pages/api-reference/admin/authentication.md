---
title: 'Authentication'
description: "You'll need to authenticate your requests to access any endpoints in the Admin API."
api: true
---

The Blutui Project Admin API requires a Blutui [access tokens](https://console.blutui.com/profile) to authenticate requests. API requests made without the correct access token will return a `401` error. Requests using a valid access token but with insufficient permissions will return a `403` error.

Here's how to authenticate with an access token using cURL:

```bash {% process=false filename="Example request with bearer token" %}
curl https://{handle}.blutui.com/admin/api/menus \
  -H 'Authorization: Bearer ey....'
```

To keep the platform secure, developers need to request specific [access scopes](#) during the authorization process. It is recommended that you only request as much data access as your application needs to work.
