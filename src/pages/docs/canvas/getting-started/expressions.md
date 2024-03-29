---
title: 'Expressions'
description: 'Canvas allows expressions everywhere.'
---

The operator precedence is as follows, with the lowest-precedence operators listed first: `?:` (ternary operator), `b-and`, `b-xor`, `b-or`, `or`, `and`, `==`, `!=`, `<=>`, `<`, `>`, `>=`, `<=`, `in`, `matches`, `starts with`, `ends with`, `..`, `+`, `-`, `~`, `*`, `/`, `//`, `%`, `is` (tests), `**`, `??`, `|` (filters), `[]`, and `.`:

```canvas {% process=false %}
{% set greeting = 'Hello ' %}
{% set name = 'Fabien' %}

{{ greeting ~ name | lower }} {# Hello fabien #}

{# use parenthesis to change precedence #}
{{ (greeting ~ name) | lower }} {# hello fabien #}
```

## Literals

The simplest form of expressions are literals. Literals are representations for types such as strings, numbers, and arrays. The following literals exist:

`"Hello World"`: Everything between two double or single quotes is a string. They are useful whenever you need a string in the template (for example as arguments to function calls, filters or just to extend or include a template). A string can contain a delimiter if it is preceded by a backslash (`\`) – like in `'It\'s good'`. If the string contains a backslash (e.g. `'c:\Program Files'`) escape it by doubling it (e.g. `'c:\\Program Files'`).

`42 / 42.23`: Integers and floating point numbers are created by writing the number down. If a dot is present the number is a float, otherwise an integer.

`["foo", "bar"]`: Arrays are defined by a sequence of expressions separated by a comma (`,`) and wrapped with squared brackets (`[]`).

`{"foo": "bar"}`: Hashes are defined by a list of keys and values separated by a comma (`,`) and wrapped with curly braces (`{}`):

```canvas {% process=false %}
{# keys as string #}
{ 'foo': 'foo', 'bar': 'bar' }

{# keys as names (equivalent to the previous hash) #}
{ foo: 'foo', bar: 'bar' }

{# keys as integer #}
{ 2: 'foo', 4: 'bar' }

{# keys as expressions (the expression must be enclosed into parentheses) #}
{% set foo = 'foo' %}
{ (foo): 'foo', (1 + 1): 'bar', (foo ~ 'b'): 'baz' }
```

`true` / `false`: `true` represents the true value, `false` represents the false value.

`null`: `null` represents no specific value. This is the value returned when a variable does not exist. `none` is an alias for null.

Arrays and hashes can be nested:

```canvas {% process=false %}
{% set foo = [1, {"foo": "bar"}] %}
```

Using double-quoted or single-quoted strings has no impact on performance but [string interpolation](#string-interpolation) is only supported in double-quoted strings.

## Math

Canvas allows you to do math in templates; the following operators are supported:

- `+`: Adds two numbers together (the operands are casted to numbers). `{{ 1 + 1 }}` is `2`.
- `-`: Subtracts the second number from the first one. `{{ 3 - 2 }}` is `1`.
- `/`: Divides two numbers. The returned value will be a floating point number. `{{ 1 / 2 }}` is `{{ 0.5 }}`.
- `%`: Calculates the remainder of an integer division. `{{ 11 % 7 }}` is `4`.
- `//`: Divides two numbers and returns the floored integer result. `{{ 20 // 7 }}` is `2`, `{{ -20  // 7 }}` is `-3` (this is just syntactic sugar for the [round](/docs/canvas/filters/round) filter).
- `*`: Multiplies the left operand with the right one. `{{ 2 * 2 }}` would return `4`.
- `**`: Raises the left operand to the power of the right operand. `{{ 2 ** 3 }}` would return `8`.

## Logic

You can combine multiple expressions with the following operators:

- `and`: Returns true if the left and the right operands are both true.
- `or`: Returns true if the left or the right operand is true.
- `not`: Negates a statement.
- `(expr)`: Groups an expression.

Canvas also supports bitwise operators (`b-and`, `b-xor`, and `b-or`). Operators are case sensitive.

## Comparisons

The following comparison operators are supported in any expression: `==`, `!=`, `<`, `>`, `>=`, and `<=`.

You can also check if a string `starts with` or `ends with` another string:

```canvas {% process=false %}
{% if 'Fabien' starts with 'F' %}
  ...
{% endif %}

{% if 'Fabien' ends with 'n' %}
  ...
{% endif %}
```

For complex string comparisons, the matches operator allows you to use regular expressions:

```canvas {% process=false %}
{% if phone matches '/^[\\d\\.]+$/' %}
  ...
{% endif %}
```

## Containment operator

The `in` operator performs containment test. It returns `true` if the left operand is contained in the right:

```canvas {% process=false %}
{# returns true #}

{{ 1 in [1, 2, 3] }}

{{ 'cd' in 'abcde' }}
```

You can use this filter to perform a containment test on strings, arrays, or objects.

To perform a negative test, use the `not in` operator:

```canvas {% process=false %}
{% if 1 not in [1, 2, 3] %}

{# is equivalent to #}
{% if not (1 in [1, 2, 3]) %}
```

## Test operator

The `is` operator performs tests. Tests can be used to test a variable against a common expression. The right operand is name of the test:

```canvas {% process=false %}
{# find out if a variable is odd #}
{{ name is odd }}
```

Tests can accept arguments too:

```canvas {% process=false %}
{% if post.status is constant('Post::PUBLISHED') %}
```

Tests can be negated by using the `is not` operator:

```canvas {% process=false %}
{% if post.status is not constant('Post::PUBLISHED') %}

{# is equivalent to #}
{% if not (post.status is constant('Post::PUBLISHED')) %}
```

## Other operators

The following operators don't fit into any of the other categories:

- `|`: Applies a filter.
- `..`: Creates a sequence based on the operand before and after the operator (this is syntactic sugar for the [range](/docs/canvas/functions/range) function):

```canvas {% process=false %}
{{ 1..5 }}

{# equivalent to #}
{{ range(1, 5) }}
```

Note that you must use parentheses when combining it with the filter operator due to the [operator precedence rules](/docs/canvas/getting-started/expressions):

```canvas {% process=false %}
(1..5) | join(', ')
```

- `~`: Converts all operands into strings and concatenates them. `{{ 'Hello ' ~ name ~ '!' }}` would return (assuming `name` is `'John'`) `Hello John!`.
- `.`, `[]`: Gets an attribute of a variable.
- `?:`: The ternary operator:

```canvas {% process=false %}
{{ foo ? 'yes' : 'no' }}
{{ foo ?: 'no' }} is the same as {{ foo ? foo : 'no' }}
{{ foo ? 'yes' }} is the same as {{ foo ? 'yes' : '' }}
```

- `??`: The null-coalescing operator:

```canvas {% process=false %}
{# returns the value of foo if it is defined and not null, 'no' otherwise #}
{{ foo ?? 'no' }}
```

- `...`: The spread operator can be used to expand arrays or hashes (it cannot be used to expand the arguments of a function call):

```canvas {% process=false %}
{% set numbers = [1, 2, ...moreNumbers] %}
{% set ratings = { 'foo': 10, 'bar': 5, ...moreRatings } %}
```

## String interpolation

String interpolation (`#{expression}`) allows any valid expression to appear within a *double-quoted string*. The result of evaluating that expression is inserted into the string:

```canvas {% process=false %}
{{ "foo #{bar} baz" }}
{{ "foo #{1 + 2} baz" }}
```

{% callout type="note" %}
Ensure that you run `courier push` after each update, to view your changes in the staging environment.
{% /callout %}
