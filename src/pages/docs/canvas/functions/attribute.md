---
title: 'attribute'
description: 'The attribute function can be used to access a "dynamic" attribute of a variable.'
---

```canvas {% process=false %}
{{ attribute(object, method) }}
{{ attribute(object, method, arguments) }}
{{ attribute(array, item) }}
```

In addition, the **defined** test can check for the existence of a dynamic attribute:

```canvas {% process=false %}
{{ attribute(object, method) is defined ? 'Method exists' : 'Method does not exist' }}
```

{% callout type="note" %}
The resolution algorithm is the same as the one used for the `.` notation, except that the item can be any valid expression.
{% /callout %}
