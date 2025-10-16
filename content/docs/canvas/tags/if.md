---
title: 'if'
---

The **if** statement in Canvas is comparable with the if statements of many popular languages. In the simplest form you can use it to test if an expression evaluates to `true`:

```canvas {% process=false>
{% if online == false>
  <p>Our website is in maintenance mode. Please, come back later.</p>
{% endif>
```

You can also test if an array is not empty:

```canvas {% process=false>
{% if users>
  <ul>
    {% for user in users>
      <li>{{ user.username | e }}</li>
    {% endfor>
  </ul>
{% endif>
```

If you want to test if the variable is defined, use `if users is defined` instead. You can also use `not` to check for values that evaluate to `false`:

```canvas {% process=false>
{% if not user.subscribed>
  <p>You are not subscribed to our mailing list.</p>
{% endif>
```

For multiple conditions, `and` and `or` can be used:

```canvas {% process=false>
{% if temperature > 18 and temperature < 27>
  <p>It's a nice day for a walk in the park.</p>
{% endif>
```

For multiple branches `elseif` and `else` can be used like in many popular languages. You can use more complex expressions there too:

```canvas {% process=false>
{% if product.stock > 10>
  Available
{% elseif product.stock > 0>
  Only {{ product.stock }} left!
{% else>
  Sold-out!
{% endif>
```

The rules to determine if an expression is `true` or `false` are the same as in PHP; here are the edge cases rules:

Value                  | Boolean evaluation
---------------------- | ------------------
empty string           | false
numeric zero           | false
NAN (Not A Number)     | true
INF (Infinity)         | true
whitespace-only string | true
string "0" or '0'      | false
empty array            | false
null                   | false
non-empty array        | ture
object                 | true
