# Javascript Global View

## organizations

### TC39

[Ecma TC39 on GitHub](https://github.com/tc39)

> Technical Committee 39. Caretaker for many standards: ECMAScript (ECMA-262), Intl (ECMA-402), JSON (ECMA-404), etc.

### The JS Foundation

[The JS Foundation](https://js.foundation/)

> The JS Foundation supports some of the most important projects in the JavaScript ecosystem.

> Non exhaustive list of supported projects :
> - ESLint
> - jQuery
> - grunt
> - mocha
> - QUnit
> - ...

## ECMAScript Norms

> Written by **TC39**.

> ECMA is an international standards body (much like ISO, IETF, W3C or WHATWG, for instance).

[Wikipedia](https://fr.wikipedia.org/wiki/ECMAScript), [Sources](https://developer.mozilla.org/fr/docs/Web/JavaScript/Language_Resources)

### ECMA-262 publications

| Nom | Edition | Publication date | Liens | 
| --- | ------- | ---------------- | ----- |
| ES1 | ECMA-262 | 1997 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf) |
| ES2 | ECMA-262 | 1998 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%202nd%20edition,%20August%201998.pdf) |
| ES3 | ECMA-262 | 1999 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf) |
| ES4 | ECMA-262 | never | Abandonned |
| ES5 | ECMA-262 | 2009 | [PDF](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262%205th%20edition%20December%202009.pdf) |
| ES5.1 | ECMA-262 | 2011 | [PDF](http://www.ecma-international.org/ecma-262/5.1/Ecma-262.pdf), [HTML](https://www.ecma-international.org/ecma-262/5.1/), [Annotated HTML](https://es5.github.io/) |
| ES6 | ECMA-262 2015 | 2015 | [PDF](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf), [HTML](http://www.ecma-international.org/ecma-262/6.0/index.html), [ES6 features list](https://github.com/lukehoban/es6features), [ES6 Features list over ES5](http://es6-features.org) |
| ES7 | ECMA-262 2016 | 2016 | [HTML](https://www.ecma-international.org/ecma-262/7.0/) |
| ES8 | ECMA-262 2017 | 2017 | [HTML](https://www.ecma-international.org/ecma-262/8.0/) |
| ES9 | ECMA-262 2018 | 2018 | [HTML](https://www.ecma-international.org/ecma-262/9.0/) |
| ES.Next | ECMA-262 2019 | 2019 ? | [Draft](https://tc39.github.io/ecma262/) [Feature watch: ECMAScript 2019](http://2ality.com/2018/02/ecmascript-2019.html) |

### The TC39 Process

[The TC39 Process](https://tc39.github.io/process-document/)

| Stage | Description |
| ----- | ----------- |
| **0 Strawman** | "It’d be dandy if we had a unicorn operator (🦄) to…" | 
| **1 Proposal** | A TC39 member “champions” the proposal. General API look and feel hammered down, and many/most cross-cutting concerns addressed. |
| **2 Draft** | Initial spec text, covers all critical aspects and technical semantics. |
| **3 Candidate** | Spec complete, verified by appropriate reviewers and greenlighted. API finalized, no stone left unturned. |
| **4 Finished** | Full Test262 coverage, 2+ shipping implementations (e.g. V8 + SpiderMonkey), significant real-world usage feedback, Spec Editor imprimatur. Usually goes into the next feature freeze (January or March). |

## Impl

ECMAScript needs an engine to be executed.

Theses Engines are used in browsers or server side.

### Engines and browsers usage

| Engine | Browser/Server |
| ------ | -------- |
| V8 [(blog officiel)](https://v8project.blogspot.fr/) | Chrome, NodeJS |
| SpiderMonkey | Gecko (Firefox) |
| JavascriptCore | Webkit (Safari) |
| Chakra | MS Edge |
| Carakan | Opera still 2013 |

### JIT

Just In Time. An engine like V8 compile JavaScript code into machine code on the fly instead of interpreting it like old engines.

[How the V8 engine works? - thibaultlaurens.github.io - 20130429](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)

[Chrome V8 - en.wikipedia.org](https://en.wikipedia.org/wiki/Chrome_V8)

[A crash course in just-in-time (JIT) compilers - hacks.mozilla.org - Lin Clark - 20170228](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/)

>
> explain diff between interpretation vs compilation and how JIT plugs into this.
>
> interpreter better startup but slower runtime (compile stupidly every LoC on the fly)
> 
> compiler slower startup but there is lots of room for optimizations
>
> JIT tries do be between them getting the best of the 2 worlds
>

[Un petit cours accéléré de compilation à la volée (JIT) - tech.mozfr.org - 20170308](https://tech.mozfr.org/post/2017/03/08/Un-petit-cours-accelere-de-compilation-a-la-volee-%28JIT%29)

> trad fr du précédent

### Features Comparators / Lists

- [kangax.github.io](http://kangax.github.io/compat-table)
- [ES6 Features list over ES5](http://es6-features.org)

### tooling lists - states of js

- [The state of js](https://stateofjs.com/)

> So we collected data from over 20,000 developers, asking them questions on topics ranging from front-end frameworks and state management, to build tools and testing libraries.

> [The state of js 2017](https://stateofjs.com/2017/introduction/)

- [The Front-End Tooling Survey 2018 - ashleynolan.co.uk/blog](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results)

- [frontendtools.com](http://frontendtools.com/tools)

### Transpilers

#### Babel

[Babel](https://babeljs.io/) allows you to write your code in ES6/7/8/x, it will generate ES5 compliant code.

### Javascript superset

[Understanding ES5, ES2015 and TypeScript, 2016/03/20 : johnpapa.net](https://johnpapa.net/es5-es2015-typescript/)

#### TypeScript

[TypeScript](http://www.typescriptlang.org/) include ES6 specs but it enhances it with more features.

### videos

[Comprendre enfin JavaScript, Thierry Chatel : Devoxx2015](https://www.youtube.com/watch?v=PSeU1IJztkI&list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b&index=128)

### presentations

[So, what’s new in ES2020? : Christophe Porteneuve - Confoo Montréal 2018](https://github.com/tdd/confoo2018-es2020)

[Paris Web 2017 - Alors, qu'y a-t-il dans ES2020 ? - Christophe Porteneuve](https://youtu.be/iN7b312ZDU4?t=4134)

## Learn

[Top JavaScript Frameworks & Topics to Learn in 2017 : Eric Elliot 20161210](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711)

[Learn JavaScript Essentials (for all skill levels) : Eric Elliot 20140803](https://medium.com/javascript-scene/learn-javascript-b631a4af11f2)

[10 Priceless Resources for JavaScript Learners : Eric Elliot 20160421](https://medium.com/javascript-scene/10-priceless-resources-for-javascript-learners-bbf2f7d7f84e)
