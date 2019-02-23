---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../main.css'
          rel: stylesheet
          media: all
        - href: '../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../index.js'

---

# js - closures

## definition

[The Two Pillars of JavaScript — Pt 2: Functional Programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4)

Like objects, closures are a mechanism for containing state. 

In JavaScript, **a closure is created whenever a function accesses a variable defined outside the immediate function scope**. 

It’s easy to create closures: Simply define a function inside another function, and expose the inner function, either 
by returning it, or passing it into another function. The variables used by the inner function will be available to it, 
even after the outer function has finished running.

You can use closures to create data privacy in JavaScript using a factory function:

```javascript
var counter = function counter() {
  var count = 0;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
};
```

## examples

[Closures : developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)

### lexical scoping

Nested functions have access to variables declared in their outer scope.

```javascript
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

// will print 'Mozilla' in an alert box
```

### closure - simple example

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName; // <-- return instead of execution
}

var myFunc = makeFunc();
myFunc();
```

Running this code has exactly the same effect as the previous example.

May seem unintuitive that this code still works. In some programming languages, the local variables within a function 
exist only for the duration of that function's execution.

However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical 
environment within which that function was declared.

`myFunc` is a reference to the instance of the function `displayName` created when `makeFunc` is run. 

The instance of `displayName` maintains a reference to its lexical environment, within which the variable `name` exists.

### closure - deeper example

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

`makeAdder` is a function factory ; it creates functions which can add a specific value to their argument.

`add5` and `add10` are both closures. 

They share the **same function body definition**, but store **different lexical environments**. 

In `add5`'s lexical environment, `x` is `5`, while in the lexical environment for `add10`, `x` is `10`.

### closure - practical example

Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

For instance, suppose we wish to add some buttons to a page that adjust the text size. 
One way of doing this is to specify the font-size of the body element in pixels, then set the size of the other elements 
on the page (such as headers) using the relative `em` unit.

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```

```html
<p>Some paragraph text</p>
<h1>some heading 1 text</h1>
<h2>some heading 2 text</h2>

<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

A click on 14 link will change the base `font-size` to `14px`, then `<p>`, `<h1>` and `<h2>` will resize accordingly.

### closure - emulating private methods

Using closures in this way is known as **the module pattern** :

We create a single lexical environment that is shared by three functions: 
`counter.increment`, `counter.decrement`, and `counter.value`.

The shared lexical environment is created in the body of an anonymous function, which is executed as soon as it has been defined.

The lexical environment contains two private items: a variable called `privateCounter` and a function called `changeBy`.

Those three public functions are closures that share the same environment.

```javascript
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

We could store this anonymous function that creates a counter in a separate variable `makeCounter` and use it to create several counters :

```javascript
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```

Each of the two counters, `counter1` and `counter2`, maintains its independence from the other.

Using closures in this way provides a number of benefits that are normally associated with object oriented programming 
(data hiding and encapsulation).

### creating closures in loops: A common mistake

See details in main link.

Issue with the shared lexical scope.

3 ways to avoid :

- use more closures with a factory function
- use IIFE inside the loop
- use the `let` keyword introduced in ES2015

### closure - performance considerations

It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, 
as **it will negatively affect script performance** both in terms of processing speed and memory consumption.
