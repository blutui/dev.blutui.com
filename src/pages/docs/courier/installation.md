---
title: 'Installation'
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

*If you use Firefox please see the guide below*

{% callout type="note" %}
Complete the [getting started guide](/docs/courier/getting-started) and learn how to start building your first project.
{% /callout %}

### Upgrade on macOS

To upgrade to the latest version of `courier`, run:

```bash
brew upgrade courier
```

### Firefox on macOS

To use `courier watch` on Firefox, you need to install `nss` (Network Security Services). NSS is a set of libraries designed to support cross-platform development of security-enabled client and server applications.

To install NSS on macOS run:

```bash
brew install nss
```

Once `nss` is successfuly installed, run:

```bash
courier install
```

## Linux

**Courier** is available on many popular Linux distributions.

{% callout type="note" %}
After installing **courier** on Linux, complete the [getting started guide](/docs/courier/getting-started) and learn how to start building your first project.
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

### Firefox on Linux

To use `courier watch` on Firefox, you need to install `nss` (Network Security Services). NSS is a set of libraries designed to support cross-platform development of security-enabled client and server applications.

To install NSS on Linux use the package manager that applys to your system:

- apt `apt install libnss3-tools`
- yum `yum install nss-tools`
- zypper `zypper install mozilla-nss-tools`

Once `nss` is successfuly installed, run:

```bash
courier install
```

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

{% callout type="note" %}
Complete the [getting started guide](/docs/courier/getting-started) and learn how to start building your first project.
{% /callout %}

### Upgrade on Windows

To upgrade to the latest version of `courier`, run:

```bash
scoop update courier
```
