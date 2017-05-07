# Javascript Global View

## ECMAScript Norms

[Wikipedia](https://fr.wikipedia.org/wiki/ECMAScript), [Sources](https://developer.mozilla.org/fr/docs/Web/JavaScript/Language_Resources)

| Nom | Edition | Publication date | Liens | 
| --- | ------- | ---------------- | ----- |
| ES1 | ECMA-262 | 1997 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf) |
| ES2 | ECMA-262 | 1998 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%202nd%20edition,%20August%201998.pdf) |
| ES3 | ECMA-262 | 1999 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf) |
| ES4 | ECMA-262 | never | Abandonned |
| ES5 | ECMA-262 | 2009 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262%205th%20edition%20December%202009.pdf) |
| ES5.1 | ECMA-262 | 2011 | [PDF](http://www.ecma-international.org/ecma-262/5.1/Ecma-262.pdf), [HTML](https://www.ecma-international.org/ecma-262/5.1/), [Annotated HTML](https://es5.github.io/) |
| ES6 | ECMA-262 2015 | 2015 | [PDF](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf), [HTML](http://www.ecma-international.org/ecma-262/6.0/index.html), [ES6 features list](https://github.com/lukehoban/es6features), [ES6 Features list over ES5](http://es6-features.org) |
| ES7 | ECMA-262 2016 | 2016 | [HTML](http://tc39.github.io/ecma262/2016/) |
| ES8 | ECMA-262 2017 | 201**?** | [Draft](http://tc39.github.io/ecma262/) |

## Impl

ECMAScript needs an engine to be executed.

Theses Engines are used in browsers or server side.

### Engines and browsers usage

| Engine | Browser/Server |
| ------ | -------- |
| V8 | Chrome, NodeJS |
| SpiderMonkey | Gecko (Firefox) |
| JavascriptCore | Webkit (Safari) |
| Chakra | MS Edge |
| Carakan | Opera still 2013 |

### Comparators

- [kangax.github.io](http://kangax.github.io/compat-table)
- [ES6 Features list over ES5](http://es6-features.org)

### Transpilers

#### Babel

[Babel](https://babeljs.io/) allows you to write your code in ES6, it will generate ES5 compliant code.

### Javascript superset

[Understanding ES5, ES2015 and TypeScript, 2016/03/20 : johnpapa.net](https://johnpapa.net/es5-es2015-typescript/)

#### TypeScript

[TypeScript](http://www.typescriptlang.org/) include ES6 specs but it enhances it with more features.
