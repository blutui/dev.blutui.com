---
title: 'random'
description: 'The random function returns a random value depending on the supplied parameter type.'
---

- a random item from a sequence;
- a random character from a string;
- a random integer between 0 and the integer parameter (inclusive).
- a random integer between the integer parameter (when negative) and 0 (inclusive).
- a random integer between the first integer and the second integer parameter (inclusive).

```canvas {% process=false>
{{ random(['apple', 'orange', 'citrus']) }} {# example output: orange #}
{{ random('ABC') }}                         {# example output: C #}
{{ random() }}                              {# example output: 15386094 #}
{{ random(5) }}                             {# example output: 3 #}
{{ random(50, 100) }}                       {# example output: 63 #}
```

## Arguments

Argument | Description                             | Type
-------- | --------------------------------------- | ----
`values` | The values                              | Any
`max`    | The max value when values is an integer | Any
