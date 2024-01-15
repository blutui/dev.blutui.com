---
title: 'Installation on macOS'
---

## macOS

**courier** is available via Homebrew. To install **courier** run:

```bash
brew tap blutui/courier
brew install courier
```

After your first installation of `courier`, it's time to setup the services required to use `courier`, run:

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

*If you use Firefox please see the guide below*

## Upgrade on macOS

To upgrade to the latest version of `courier`, run:

```bash
brew upgrade courier
```

## Firefox on macOS

To use `courier watch` on Firefox, you need to install `nss` (Network Security Services). NSS is a set of libraries designed to support cross-platform development of security-enabled client and server applications.

To install NSS on macOS run:

```bash
brew install nss
```

Once `nss` is successfuly installed, run:

```bash
courier install
```
