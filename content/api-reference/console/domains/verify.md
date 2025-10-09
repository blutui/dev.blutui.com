---
title: Verify domain
description: 'Check the verification status for a domain in your agency.'
api: 'POST api.blutui.com/v1/agencies/{username}/domains/{id}/verify'
---

{% row %}

{% column %}
### Path parameters

<Parameter name="id" type="string" required="true" %}
The domain ID to verify the status of.
</Parameter>

### Response

<Parameter name="object" type="string" %}
This will always contain `domain_status` for this endpoint.
</Parameter>

<Parameter name="verified" type="boolean" %}
Determine if the domain is verified.
</Parameter>

<Parameter name="message" type="string" %}
Additional information about the current verification state of the domain.
</Parameter>

{% /column %}

{% column sticky="true" %}

{% code-group %}

```ts {% process=false filename="Node.js" %}
import Blutui from 'blutui'

const blutui = new Blutui('ey....')

blutui.agency('studio').domains.verify('9c17d680-e0af-4f00-9e28-08c4e38e89e0')
```

```bash {% process=false filename="cURL" %}
curl -X POST 'https://api.blutui.com/v1/agencies/studio/domains/9c17d680-e0af-4f00-9e28-08c4e38e89e0/verify' \
     -H 'Authorization: Bearer ey....' \
     -H 'Content-Type: application/json'
```

{% /code-group %}

{% code-group %}

```json {% process=false filename="Verified" %}
{
  "object": "domain_state",
  "verified": true,
  "message": "DNS correctly configured",
}
```

```json {% process=false filename="A Record Missing" %}
{
  "object": "domain_state",
  "verified": false,
  "message": "A record not configured",
}
```

```json {% process=false filename="TXT Record Missing" %}
{
  "object": "domain_state",
  "verified": false,
  "message": "TXT verification not found.",
}
```

{% /code-group %}

{% /column %}

{% /row %}
