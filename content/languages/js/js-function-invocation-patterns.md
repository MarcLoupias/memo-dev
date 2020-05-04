# function invocation patterns

from "JavaScript: The Good Parts", Douglas Crockford (2008) ISBN "978-0-596-51774-8"

- method invocation pattern
- function invocation pattern
- constructor invocation pattern (*not recommended*)
- apply invocation pattern

## method invocation pattern

```javascript
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3
```

A `function` stored as an object property is called a `method`.

When a `method` is invoked, `this` is bound to that object.

Methods that get their object context from `this` are called `public methods`.

## function invocation pattern

```javascript
var add = function (a, b) {
    return a +b;
};

var sum = add(3, 4); // return 7
```

`this` is bound to the global object.

Mistake in the language design.

There is a workaround using the `var that = this;` trick :

```javascript
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment(2);
console.log(myObject.value);

var add = function (a, b) {
    return a +b;
};

// augmenting myObject with a double method

myObject.double = function () {
    var that = this; // workaround

    var helper = function () {
        that.value = add(that.value, that.value);
    };

    helper(); // Invoke helper as a function.
};

// Invoke double as a method :

myObject.double();
console.log(myObject.value);
```

## constructor invocation pattern

If a function is invoked with the `new` prefix, then a new object will be created.

Created with a hidden link to the value of the function's `prototype` member.

`this` will be bound to that new object.

```javascript
// create a constructor function called Quo
// it makes an object with a status property

var Quo = function (string) {
    this.status = string;
};

// give all instances of Quo a public method called get_status

Quo.prototype.get_status = function () {
    return this.status;
};

// make an instance of Quo

var myQuo = new Quo('confused');

console.log(myQuo.get_status()); // confused
```

Functions intented to be used with the `new` prefix are called *constructors*.

By convention they are named in UpperCamelCase.

Calling a constructor function without the `new` prefix is a common bug source
(`this` context is not the same)

Using this constructor style is **not** recommended.

## apply invocation pattern

Functions can have methods.

The `apply` method from the `function` object let us invoke the function with a chosen `this` context and an array of parameters.

See [`Function.prototype.apply()` : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

```javascript
var add = function (a, b) {
    return a +b;
};

var array = [3, 4];
var sum = add.apply(null, array); // 7
console.log(sum);

// make an object with a status member.

var Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function () {
    return this.status;
};

var myQuo = new Quo('confused');

console.log(myQuo.get_status()); // confused

var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype but we can invoke get_status method on statusObject

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status); // 'A-OK'
```
