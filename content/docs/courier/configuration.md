---
title: 'Configuration'
---

Every Blutui site requires a `courier.json` file to connect to Blutui, it allows you to manage configuration options on a per site basis.

To create a new `courier.json` file run:

```bash
courier init [your-project-handle]
```

This command will generate:

```json {% process=false filename="courier.json" %}
{
  "handle": "[your-project-handle]",
  "cassette": "default"
}
```

You can also initialise a new configuration file with a different Cassette, using:

```bash
courier init [project-handle] --cassette [cassette-handle]
```

For more information on the available flags, use `courier init -h`.
