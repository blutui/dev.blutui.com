---
title: 'agent'
description: 'The agent function allows you to get information about the current device.'
---

## is

Check for a certain property in the user agent:

```canvas {% process=false %}
{{ agent().is('Windows') }}
{{ agent().is('Firefox') }}
{{ agent().is('iPhone') }}
{{ agent().is('OS X') }}
```

## Magic is-method

Magic method that does the same as the previous **is** method:

```canvas {% process=false %}
{{ agent().isAndroidOS() }}
{{ agent().isNexus() }}
{{ agent().isSafari() }}
```

## Mobile detection

Check for mobile device:

```canvas {% process=false %}
{{ agent().isMobile() }}
{{ agent().isTablet() }}
```

## Match user agent

Search the user agent with a regular expression:

```canvas {% process=false %}
{{ agent().match('regexp') }}
```

## Accepted languages

Get the browser's accepted languages. Example:

```canvas {% process=false %}
{{ agent().languages() }}
{# outputs: ['en-us', 'en'] #}
```

## Device name

Get the device name, if mobile. (iPhone, Nexus, ...)

```canvas {% process=false %}
{{ agent().device() }}
```

## Device Type

Get the device type. (desktop, tablet, mobile, ...)

```canvas {% process=false %}
{{ agent().deviceType() }}
```

## Operating system

Get the operating system. (Ubuntu, Windows, OS X, ...)

```canvas {% process=false %}
{{ agent().platform() }}
```

## Browser name

Get the browser name. (Chrome, IE, Safari, Firefox, ...)

```canvas {% process=false %}
{{ agent().browser() }}
```

## Desktop detection

Check if the user is using a desktop device.

```canvas {% process=false %}
{{ agent().isDesktop() }}
```

## Phone detection

Check if the user is using a phone device.

```canvas {% process=false %}
{{ agent().isPhone() }}
```

## Robot detection

Check if the user is a robot.

```canvas {% process=false %}
{{ agent().isRobot() }}
```

## Robot name

Get the robot name.

```canvas {% process=false %}
{{ agent().robot() }}
```

## Browser/platform version

{% callout type="warning" %}
The version method is still in beta, so it might not return the correct result.
{% /callout %}

Get the browser or platform version you can use:

```canvas {% process=false %}
{% set browser = agent().browser() %}
{{ agent().version(browser) }}

{% set platform = agent().platform() %}
{{ agent().version(platform) }}
```
