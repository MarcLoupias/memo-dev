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


## CommonJS

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


## ES5 Modules

```javascript

// add.js

export function add (a, b) {
  return a + b;
}

// index.js

import { add } from './add.js';

add(1, 2); // 3

```

