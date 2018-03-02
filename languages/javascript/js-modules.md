# JavaScript - Modules

**sources**

[JavaScript Module Systems Showdown: CommonJS vs AMD vs ES2015 - auth0.com/blog - 20160315](https://auth0.com/blog/javascript-module-systems-showdown/)

[Relation between CommonJS, AMD and RequireJS? - stackoverflow.com - 20130513](https://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs)

[JavaScript modulaire pour le front-end : les bases - putaindecode.io - 20141215](http://putaindecode.io/fr/articles/frontend/2015-etat-lieux-javascript-modulaire/)

[Writing Modular JavaScript With AMD, CommonJS & ES Harmony - addyosmani.com - no date](https://addyosmani.com/writing-modular-js/)

[ES6 modules, Node.js and the Michael Jackson Solution - medium.com/dailyjs - 20170721](https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b)

[JavaScript Modules: A Beginner’s Guide - Preethi Kasireddy - 20160122](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)

[JavaScript Module Pattern: In-Depth - 20100312](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

[The Module Pattern - Learning JavaScript Design Patterns - Addy Osmani 2017](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)

[ES6+ maintenant ! (Christophe Porteneuve) - Devoxx2016](https://youtu.be/KJzlllc7Jq8?t=1806)

[État de l'art de ES2015+ dans Node.js et le navigateur (Christophe Porteneuve) - Blend Web Mix 2016](https://youtu.be/k0_gi7BoBgw?t=475)


## why

- linking dependencies together (in JavaScript world it is just files and it does this with global var by default)
- encapsulation to prevent conflicts
- managing cycling ref (A deps on B who deps on C who deps on A)
- in regular JS import order matters and it is hard to maintain

// TODO refaire les exemples avec la fonction add de lodash


## IIFE

// check http://falola.developpez.com/tutoriels/javascript/namespace/

// check https://zestedesavoir.com/tutoriels/358/module-pattern-en-javascript/#p83162 

```javascript

// my-module.js

var myModule = (function() {
  return {
    "add": function(a, b) {
      return a + b;
    }
  };
})();

// index.js

myModule.add(1, 2); // 3
```


## AMD

AMD is for Asynchronous Module Definition. There is [a specification](https://github.com/amdjs/amdjs-api/blob/master/AMD.md).

Main advantage over CommonJS : Async support.

The AMD module format itself is a proposal for defining modules where both the module and dependencies can be asynchronously loaded.

This is designed to be used in browsers.

AMD module can be JavaScript object, function, constructor, string, but also files (JSON, css, ...) 

```javascript

// add.js

define([], function(){
 
  function add(a, b){
    return a + b;
  } 
 
  return {
    add: add
  };
});

// index.js

require(['add'], function ( add ) {
  add(1, 2); // 3
});

```

- `define` method for facilitating module definition
- `require` method for handling dependency loading

The `define` signature is :

```javascript
define(
    module_id /*optional*/,
    [dependencies] /*optional*/,
    definition function /*function for instantiating the module or object*/
);
```

- The `module_id` string is the module name.
- The `dependencies` array describe the deps to be injected in the `definition` function.
- The `definition` function is a callback called by `define` when the deps are loaded.

AMD has several implementation :

- RequireJS http://requirejs.org
- curl.js http://github.com/unscriptable/curl
- bdLoad http://bdframework.com/bdLoad
- Yabble http://github.com/jbrantly/yabble
- PINF http://github.com/pinf/loader-js


## CommonJS

[commonjs.org](http://www.commonjs.org/)

The CommonJS module proposal specifies a simple API for declaring modules server-side.

Main advantage over AMD : Compact declarative syntax.

- `exports` contains the objects a module wishes to make available to other modules
- `require` function that modules can use to import the exports of other modules. 

CommonJS is the builtin **Node.js** module system.
 
A module exports can only be a JavaScript object. [See Node.js doc](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html#modules_module_exports).

A module is automatically wrapped in an anonymous function :

```javascript
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

So top level variables in a CommonJS module are scoped to the module rather than the global object. 

[See Node.js doc](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html#modules_the_module_wrapper)

Notice that Node.js is caching exports, so if you exports a primitive, the value is copied by value. [Cf this stackoverflow question](https://stackoverflow.com/questions/38972252/how-does-commonjs-make-two-copies-during-its-export-and-require-process).

[Browserify](http://browserify.org/) is a tool built to use CommonJS for frontend development. He reads all the source files, following
the require instruction, and concat all files in a single one (a *bundle*) to be linked in the app.

The verbose AMD syntax is not needed anymore, and we can have consistency in modules definitions between frontend and backend.

```javascript

// add.js

function add (a, b) {
    return a + b
}

module.exports = add;

// index.js

var add = require('add');

add(1, 2); // 3

```


## ES6 Modules

The [TC39](http://www.ecma-international.org/memento/TC39.htm) proposal for a single module definition for frontend and backen JavaScript.

```javascript

// add.js

export function add (a, b) {
  return a + b;
}

// index.js

import { add } from './add.js';

add(1, 2); // 3

```

- `import` declarations bind a modules exports as local variables and may be renamed to avoid name collisions/conflicts.
- `export` declarations declare that a local-binding of a module is externally visible such that other modules may read the exports but can't modify them. Modules may export child modules but can't export modules that have been defined elsewhere.

ES6 creates a live read-only view of the modules we import. A primitive exposed outside with `export` is the same variable read from outside with `import`.
