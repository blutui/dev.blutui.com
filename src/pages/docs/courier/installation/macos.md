---
title: 'Installation on macOS'
---

## macOS

**courier** is available via Homebrew. To install **courier** run:

```bash
brew install --cask blutui/courier/courier
```

## Create a Courier token

{% partial file="create-courier-token.md" /%}

*If you use Firefox please see the guide below*

## Upgrade on macOS

To upgrade to the latest version of `courier`, run:

```bash
brew upgrade --cask courier
```

## Firefox on macOS

To use `courier dev` on Firefox, you need to install `nss` (Network Security Services). NSS is a set of libraries designed to support cross-platform development of security-enabled client and server applications.

To install NSS on macOS run:

```bash
brew install nss
```
