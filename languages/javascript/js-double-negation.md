# javascript double negation `!!`

[double-negation-in-javascript-what-is-the-purpose : stackoverflow.com] (http://stackoverflow.com/questions/10467475/double-negation-in-javascript-what-is-the-purpose)

It casts to boolean. The first `!` negates it once, converting values like so:

- `undefined` to `true`
- `null` to `true`
- `+0` to `true`
- `-0` to `true`
- `''` to `true`
- `NaN` to `true`
- `false` to `true`
- All other expressions to `false`

Then the other `!` negates it again. A concise cast to boolean, exactly equivalent to ToBoolean simply because `!` is defined as its negation. It’s unnecessary here, though, because it’s only used as the condition of the conditional operator, which will determine truthiness in the same way.
