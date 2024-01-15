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

After your first installation of `courier`, it's time to setup the services required to run `courier`, run:

```bash
courier install
```

## Create a Courier token

{% partial file="create-courier-token.md" /%}

### Using your Courier token

If you haven't done so already, [login](/docs/courier/commands#login) into Courier using your newly generated token:

```bash
courier login [your-courier-token]
```

Once setup, you can now start pushing and pulling projects.

{% callout type="note" %}
Complete the [getting started guide](/docs/courier/getting-started#linking-your-project) and learn how to start building your first project.
{% /callout %}


## Upgrade on Windows

To upgrade to the latest version of `courier`, run:

```bash
scoop update courier
```
