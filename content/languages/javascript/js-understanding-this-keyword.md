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

# `this` keyword

## articles

[understanding-the-this-keyword-in-javascript : toddmotto.com](https://toddmotto.com/understanding-the-this-keyword-in-javascript/)

[developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this)

[Tests, closures and arrow functions : glebbahmutov.com](https://glebbahmutov.com/blog/test-closures/#more)

> `this` keyword in JavaScript will burn you one day. Then it will burn you again and again and again. If Dante Alighieri were alive today, he would put writing object-oriented JavaScript among one of the first levels of Hell for sure.

['this' in TypeScript - TypeScript/wiki](https://github.com/Microsoft/TypeScript/wiki/%27this%27-in-TypeScript)

## code demo

Every new `function` defined its own `this` value :

```javascript
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;
  this.printAge = function () {
    console.log(this.age);
  };

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
p.printAge(); // 0
```

In **ECMAScript 3/5**, the `this` issue was fixable by assigning the value in `this` to a variable that could be closed over.

```javascript
function Person() {
  var that = this;
  that.age = 0;
  that.printAge = function () {
    console.log(this.age);
  };


  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}

var p = new Person();
p.printAge(); // 0 then ++ each second
```

In **ECMAScript 6**, an arrow function does not create its own `this`, the `this` value of the enclosing execution context is used.

```javascript
function Person(){
  this.age = 0;
  this.sayAge = function () {
    console.log(this.age);
  };

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
p.sayAge(); // 0 then ++ each second
```
