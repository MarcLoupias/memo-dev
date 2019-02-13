# javascript best practices

## coding style

- [coding style from airbnb](https://github.com/airbnb/javascript)

## articles

- [javascript_best_practises : qooxdoo.org](http://qooxdoo.org/docs/general/javascript_best_practises)
- [javascript : Douglas Crockford](http://www.crockford.com/javascript/)
- [Onze idées fausses sur l'héritage en JavaScript : sylvainpv.developpez.com - 20150523](http://sylvainpv.developpez.com/traductions/javascript/idees-fausses-heritage/) (trad article Eric Elliott)
- [The Complete JavaScript Handbook - medium.freecodecamp.org - 20181030](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c)

> Table of Contents
> 
> - ECMAscript
> - ES6
> - ES2016
> - ES2017
> - ES2018
> - Coding Style
> - Lexical Structure
> - Variables
> - Types
> - Expressions
> - Prototypal Inheritance
> - Classes
> - Exceptions
> - Semicolons
> - Quotes
> - Template Literals
> - Functions
> - Arrow Functions
> - Closures
> - Arrays
> - Loops
> - Events
> - The Event Loop
> - Asynchronous Programming and Callbacks
> - Promises
> - Async and Await
> - Loops and Scope
> - Timers
> - This
> - Strict Mode
> - Immediately-Invoked Function Expressions (IFFE’s)
> - Math Operators
> - The Math Object
> - ES modules
> - CommonJS
> - Glossary

## perfs

[Intensive JavaScript - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript)

> By default the browser uses a single thread to run all the JavaScript in your page as well as to perform layout, reflows, and garbage collection. This means that long-running JavaScript functions can block the thread, leading to an unresponsive page and a bad user experience.
> 
> You can use the [Frame rate](https://developer.mozilla.org/en-US/docs/Tools/Performance/Frame_rate) and [Waterfall tools](https://developer.mozilla.org/en-US/docs/Tools/Performance/Waterfall) to see when JavaScript is causing performance problems, and to single out the particular functions that need attention.
> 
> In this article we'll take an example site whose long-running JavaScript causes responsiveness problems, and apply two different approaches to fixing them. The first is to split long-running functions into pieces and use [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) to schedule each piece, and the second is to run the whole function in a separate thread using a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## undefined & null check
- [checking-for-undefined-null-and-empty-variables-in-javascript : davidbcalhoun.com](davidbcalhoun.com/2011/checking-for-undefined-null-and-empty-variables-in-javascript/)

## javascript strict mode
[Strict mode : developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript :
- le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée)
- le mode strict corrige les erreurs qui font qu'il est difficile pour les moteurs JavaScript d'effectuer des optimisations (exécution plus rapide)
- le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript

## online tools
- [js-variables name validator](https://mothereff.in/js-variables)

## array iteration

[Loop through an array in JavaScript : stackoverflow.com](http://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript)

[For-each over an array in JavaScript? : stackoverflow.com](http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript)

[Array.forEach n’est pas toujours la meilleure solution ! - blog.overnetcity.com - 20140829](https://blog.overnetcity.com/2014/08/29/array-foreach-nest-pas-toujours-meilleure-solution/)

## `array` / `object` / `Map` / `Set`

### definitions

#### `array`

[Array in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```javascript
const fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2
```

It's an indexed list.

Never use the new constructor (`const list = new Array();`), always use directly the literal (`const list = [];`).
The constructor is slower and there is a common mistake with it, when an array is instantiated with only one arg you define the array length, and not an array of one element :
`const list = new Array(2); // the array contains in fact [undefined, undefined], but const list = new Array(1, 2) leads to [1, 2]`.

Resize automatically. Order preserved ('cause indexed). Any types in it. Values can be duplicated (`const list = [1, 2, 2, 2, 'toto'];`)

See MDN for details.

#### `object`

[Object in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```javascript
const fruit = { name: 'Apple' };
```

See [Object initializer in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) for details with `new` keyword or `Object.create()` function.

The `const object = new Object();` is rarely used.

The `const object = Object.create(proto);` is used to create an object based on a `proto` prototype. `const object = Object.create(null);` allows object creation without any prototype.

An object is a key/value dictionnary.

A key must be unique and a string (or a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)). Keys are unordered, use Map instead if you need to keep an order.

Values can be of any types.

Can't get the size (numbers of K/V) easily.

#### `Map`

[Map in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```javascript
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}
```

[Objects and maps compared](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared)

A key must be unique and from any type (including function).

Keys are ordered.

There is a `size()` function to get the K/V number.

Map is iterable.

A Map may perform better in scenarios involving frequent addition and removal of key pairs.

#### `Set`

[Set in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```javascript
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

// ...

// iterate a Set
for (let item of mySet) console.log(item);
```

`Set` objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the `Set` **may only occur once**; it is unique in the `Set`'s collection.

`Set`, more familiar as a Math concept, is an abstract data type which contains only distinct elements/objects without the need of being allocated orderly by index.

A `Set` is fundamentally different with an `Array`, a `Set` is a keyed collection where an `Array` is an indexed collection.

Indexed collections are collections of data which are ordered by an index value

Keyed collections are collections which use keys; these contain elements which are iterable in the order of insertion.

### articles

[Array in Indexed collections article - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)

[Maps and Sets in Key collections article - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)

[Map vs Object — What and when? - Maya Shavin - medium.com - 20180201](https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373)

[Set vs Array — What and when? - Maya Shavin - medium.com - 20180124](https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a)

## `async` / `await`

[Coder l’asynchrone en Javascript (Par Matthieu Lux)](https://www.youtube.com/watch?v=FZ51IVn6tVM)

[Tasks, microtasks, queues and schedules - jakearchibald.com - 20150817](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
> In summary:
> 
> - Tasks execute in order, and the browser may render between them
> - Microtasks execute in order, and are executed:
>   - after every callback, as long as no other JavaScript is mid-execution
>   - at the end of each task
>
> [Commentaire SylvainPV sur dev.com (fil privé)](https://www.developpez.net/forums/d1890469-2/forums-beneficiaires-d-hebergement/priv-redaction/priv-articles/2018-09-05-javascript-recursivite-parcours-d-arbres-l-objet-promise/#post10497961) :
> 
> Ce qu'il faut retenir, c'est qu'un `Promise.resolve` n'entraîne pas de "vrai asynchronisme", c'est-à-dire qu'il n'attend pas la prochaine boucle d'événements. On a besoin d'attendre la boucle d'événements pour laisser le navigateur faire le rendu et ne pas avoir de freeze.

[JavaScript `async`/`await`: The Good Part, Pitfalls and How to Use - hackernoon.com - Charlee Li - 20180607](https://hackernoon.com/javascript-async-await-the-good-part-pitfalls-and-how-to-use-9b759ca21cda)

[`async`/`await` - javascript.info](https://javascript.info/async-await)

> **TLDR :**
> 
> The `async` keyword before a function has two effects:
> 
> 1. Makes it always return a promise.
> 2. Allows to use `await` in it.
> 
> The `await` keyword before a promise makes JavaScript wait until that promise settles, and then:
> 
> 1. If it’s an error, the exception is generated, same as if `throw error` were called at that very place.
> 2. Otherwise, it returns the result, so we can assign it to a value.
> 
> Together they provide a great framework to write asynchronous code that is easy both to read and write.
> 
> With `async/await` we rarely need to write `promise.then/catch`, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also `Promise.all` is a nice thing to wait for many tasks simultaneously.

### drawbacks

[How to escape async/await hell](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c)

> **TLDR :** use successives `await` when not needed, the program control flow should continue. Use `Promise.all` when needed. 

## design patterns

[The Comprehensive Guide to JavaScript Design Patterns - www.toptal.com - Marko Mišura - 201803xx](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)

[Learning JavaScript Design Patterns - Volume 1.7.0 - Addy Osmani - 2017](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

Table of Content

> - Introduction
> - What is a Pattern?
> - "Pattern"-ity Testing, Proto-Patterns & The Rule Of Three
> - The Structure Of A Design Pattern
> - Writing Design Patterns
> - Anti-Patterns
> - Categories Of Design Pattern
> - Summary Table Of Design Pattern Categorization
> - JavaScript Design Patterns
>     - Constructor Pattern
>     - Module Pattern
>     - Revealing Module Pattern
>     - Singleton Pattern
>     - Observer Pattern
>     - Mediator Pattern
>     - Prototype Pattern
>     - Command Pattern
>     - Facade Pattern
>     - Factory Pattern
>     - Mixin Pattern
>     - Decorator Pattern
>     - Flyweight Pattern 
> - JavaScript MV* Patterns
>     - MVC Pattern
>     - MVP Pattern
>     - MVVM Pattern 
> - Modern Modular JavaScript Design Patterns
>     - AMD
>     - CommonJS
>     - ES Harmony 
> - Design Patterns In jQuery
>     - Composite Pattern
>     - Adapter Pattern
>     - Facade Pattern
>     - Observer Pattern
>     - Iterator Pattern
>     - Lazy Initialization Pattern
>     - Proxy Pattern
>     - Builder Pattern
> - jQuery Plugin Design Patterns
> - JavaScript Namespacing Patterns
> - Conclusions
> - References
>

## `class`

[How to Use Classes and Sleep at Night - Dan Abramov - 20151015](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4)

Problem :

- Classes obscure the prototypal inheritance at the core of JS.
- Classes encourage inheritance but you should prefer composition.
- Classes tend to lock you into the first bad design you came up with.

How to use classes and sleep at night :

- Resist making classes your public API.
- Don’t inherit more than once.
- Don’t make `super` calls from methods.
- Don’t expect people to use your classes.
- Learn functional programming

Applied to React :

- You can use `class` in your JS if you don’t inherit twice and don’t use `super`.
- Prefer to write React components as pure functions when possible.
- Use ES6 classes for components if you need the state or lifecycle hooks.
- In this case, you may only extend `React.Component` directly.
- Give your feedback to the React team on the functional state proposals.
