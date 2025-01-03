---
title: 'Installation on Linux'
---

## Linux

**Courier** is available on many popular Linux distributions.

{% callout type="note" %}
After installing **courier** on Linux, complete the [getting started guide](/docs/courier/getting-started#linking-your-project) and learn how to start building your first project.
{% /callout %}

### Debian/Ubuntu

Install and upgrade:

- Download the `.deb` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo apt install ./courier_*_linux_amd64.deb
```

### Fedora

Install and upgrade:

- Download the `.rpm` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo dnf install ./courier_*_linux_amd64.rpm
```

### Centos

Install and upgrade:

- Download the `.rpm` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo yum localinstall ./courier_*_linux_amd64.rpm
```

### openSUSE/SUSE

Install and upgrade:

- Download the `.rpm` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo zypper in ./courier_*_linux_amd64.rpm
```

## Create a Courier token

{% partial file="create-courier-token.md" /%}

*If you use Firefox please see the guide below*

## Firefox on Linux

To use `courier dev` on Firefox, you need to install `nss` (Network Security Services). NSS is a set of libraries designed to support cross-platform development of security-enabled client and server applications.

To install NSS on Linux use the package manager that applys to your system:

- apt `apt install libnss3-tools`
- yum `yum install nss-tools`
- zypper `zypper install mozilla-nss-tools`
