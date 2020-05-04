# named function vs expression function

## articles

- [Named function expressions demystified](http://kangax.github.io/nfe/) must read.
- [discussion stackoverflow](http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

## hoisting

[Hoisting : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

> variable and function declarations are put into memory during the compile phase

Hoisting is not available with expression function where the declaration order impact function usage.

```javascript
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");
/*
The result of the code above is: "My cat's name is Tigger"
*/
```

```javascript
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/
```
