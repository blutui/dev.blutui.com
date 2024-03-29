---
title: 'Configuration'
---

Every Blutui site requires a `courier.json` file to connect to Blutui, it allows you to manage configuration options on a per site basis.

To create a new `courier.json` file run:

```bash
courier init
```

This command will generate:

```json {% process=false filename="courier.json" %}
{
  "handle": "",
  "site": ""
}
```

You can also initialise a new configuration file with values through the terminal:

```bash
courier init --handle [site-handle] --site [site-url]
```

For more information on the available flags, use `courier init -h`.
