---
title: 'Installation macOS'
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

Before you can start using Courier, you will need to obtain a Courier token. Follow these steps:

1. From the Agency Console, go to your `Profile` from by clicking on your avatar in the top right corner.
2. Navigate to the `Apps` section from the sidebar.
3. Click the `Create token` button on the right-hand side.
4. Give your new Courier token a name, something like "Work MacBook", then click `Create`.
5. Your Courier token will be shown for use later on. Please remember that this token is only shown once.

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
