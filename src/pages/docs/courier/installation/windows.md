---
title: 'Installation on Windows'
---

## Windows

`courier` is available via [scoop](https://scoop.sh/). To install `courier` run:

```bash
scoop bucket add blutui https://github.com/blutui/bucket-courier.git
scoop install blutui/courier
```

{% callout type="warning" %}
Git is required to install **scoop** buckets
{% /callout %}

## Create a Courier token

{% partial file="create-courier-token.md" variables={os: "windows"} /%}

## Upgrade on Windows

To upgrade to the latest version of `courier`, run:

```bash
scoop update courier
```
