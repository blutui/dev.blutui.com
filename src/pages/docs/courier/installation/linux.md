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

- Run `courier install` to setup the required services for Blutui Courier.

### Fedora

Install and upgrade:

- Download the `.rpm` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo dnf install ./courier_*_linux_amd64.rpm
```

- Run `courier install` to setup the required services for Blutui Courier.

### Centos

Install and upgrade:

- Download the `.rpm` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo yum localinstall ./courier_*_linux_amd64.rpm
```

- Run `courier install` to setup the required services for Blutui Courier.

### openSUSE/SUSE

Install and upgrade:

- Download the `.rpm` file from the [downloads page](https://blutui.com/developers/courier)
- Install the downloaded file:

```bash
sudo zypper in ./courier_*_linux_amd64.rpm
```

- Run `courier install` to setup the required services for Blutui Courier.


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

## Firefox on Linux

To use `courier watch` on Firefox, you need to install `nss` (Network Security Services). NSS is a set of libraries designed to support cross-platform development of security-enabled client and server applications.

To install NSS on Linux use the package manager that applys to your system:

- apt `apt install libnss3-tools`
- yum `yum install nss-tools`
- zypper `zypper install mozilla-nss-tools`

Once `nss` is successfuly installed, run:

```bash
courier install
```
