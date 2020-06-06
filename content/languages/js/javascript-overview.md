# JavaScript - overview

## history

[JavaScript: The First 20 Years by Wirfs-Brock, Allen and Eich, Brendan](https://zenodo.org/record/3707008#.XttLBpY695s)

> This paper tells the story of the creation, design, evolution, and standardization of the JavaScript language over the period of 1995–2015.

[Brendan Eich, JavaScript initial author, founder of Brave browser, co-founder of Mozilla and Firefox](https://github.com/BrendanEich)

[The Third Age of JavaScript](https://www.swyx.io/writing/js-third-age/)

> ![JavaScript ages](/images/js/js-ages.jpeg)
>
---
>
> **The first age**, from 1997-2007
>
> ![ECMAscript first age](/images/js/ecmascript-history.png)
>
> See [the book](https://zenodo.org/record/3707008#.XttLBpY695s).
>
---
>
> **The second age**, from 2009-2019
>
> - Born of node/npm and ES5 in 2009.
> - many new tools written in JS (grunt, gulp, bundlers, linters, etc ...)
> - many new libs (Backbone, Ember, AngularJS, React, Vue, Angular)
> - new architectures (SPA, PWA, SSR)
> - JS is not limited to browsers anymore reaches new devices (desktop, IoT, etc ...)
>
> At the end we are seeing emergence of specialized runtimes (Hermes for Android) and compiler framework (Svelte).
>
---
>
> **The third age**, from 2020-?
>
> 2020 feels like the start of a new Age.
>
> If the First Age was about building out a language, and the Second Age was about users exploring and expanding the language, the Third Age is about clearing away legacy assumptions and collapsing layers of tooling.
>
> - The main legacy assumption being cleared away is the JS ecosystem's reliance on CommonJS
> - The other assumption going away is that JavaScript tools must be built in JavaScript.
> - Layers are also collapsing in interesting ways. Deno takes a radical approach of writing a whole new runtime, collapsing a bunch of common tools doing tasks like testing, formatting, linting and bundling into one binary, speaking TypeScript, and even including a standard lib.
>
> In summary: Third Age JS tools will be
>
> - Faster
> - ESM first
> - Collapsed Layers (One thing doing many things well instead of many things doing one thing well)
> - Typesafe-er (built with a strongly typed language at core, and supporting TS in user code with zero config)
> - Secure-er (from dependency attacks, or lax permissions)
> - Polyglot
> - Neo-Isomorphic (recognizing that much, if not most, JS should run first at buildtime or on server-side before ever reaching the client)
>

## organizations

### TC39

[TC39 webpage on www.ecma-international.org](http://www.ecma-international.org/memento/tc39.htm)

[Ecma TC39 on GitHub](https://github.com/tc39)

> Technical Committee 39. Caretaker for many standards: ECMAScript (ECMA-262), Intl (ECMA-402), JSON (ECMA-404), etc.

### The JS Foundation

[The JS Foundation](https://js.foundation/)

> The JS Foundation supports some of the most important projects in the JavaScript ecosystem.
>
> Non exhaustive list of supported projects :
>
> - ESLint
> - jQuery
> - grunt
> - mocha
> - QUnit
> - ...

## ECMAScript Norms

> Written by **TC39**.
>
> ECMA is an international standards body (much like ISO, IETF, W3C or WHATWG, for instance).

[Wikipedia](https://fr.wikipedia.org/wiki/ECMAScript), [Sources](https://developer.mozilla.org/fr/docs/Web/JavaScript/Language_Resources)

### ECMA-262 publications

Listed [on the ECMA internatinal website](https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm).

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
| ES.Next | ECMA-262 2019 | 2019 ? | [Draft](https://tc39.github.io/ecma262/), [Feature watch: ECMAScript 2019](http://2ality.com/2018/02/ecmascript-2019.html) |

[Publication announced in the ECMA news page](https://www.ecma-international.org/news/index.html).

Occurs following a general assembly meeting. The last to date was the 115th General Assembly held in Geneva, June 27, 2018.

They approved the [ECMA-262 9th edition](https://www.ecma-international.org/ecma-262/9.0/) - ECMAScript® 2018 Language Specification.

### The TC39 Process

[The TC39 Process](https://tc39.github.io/process-document/)

| Stage | Description |
| ----- | ----------- |
| **0 Strawman** | "It’d be dandy if we had a unicorn operator (🦄) to…" |
| **1 Proposal** | A TC39 member “champions” the proposal. General API look and feel hammered down, and many/most cross-cutting concerns addressed. |
| **2 Draft** | Initial spec text, covers all critical aspects and technical semantics. |
| **3 Candidate** | Spec complete, verified by appropriate reviewers and greenlighted. API finalized, no stone left unturned. |
| **4 Finished** | Full Test262 coverage, 2+ shipping implementations (e.g. V8 + SpiderMonkey), significant real-world usage feedback, Spec Editor imprimatur. Usually goes into the next feature freeze (January or March). |

ECMAScript proposals are tracked [in a dedicated repository on GitHub](https://github.com/tc39/proposals).

The [`finished-proposals.md`](https://github.com/tc39/proposals/blob/master/finished-proposals.md) file can be seen as a changelog between specs yearly versions.

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
| [QuickJS](https://bellard.org/quickjs/) [(news)](https://www.developpez.net/forums/d1989575/javascript/bibliotheques-frameworks/quickjs-moteur-javascript-leger-prenant-charge-specification-es2019/#post11040803) | none |
| [Hermes](https://github.com/facebook/hermes) | ReactNative on Android by Facebook |

### JIT

Just In Time. An engine like V8 compile JavaScript code into machine code on the fly instead of interpreting it like old engines.

[How the V8 engine works? - `thibaultlaurens.github.io` - 20130429](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)

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

- [`kangax.github.io`](http://kangax.github.io/compat-table)
- [ES6 Features list over ES5](http://es6-features.org)
- [The Complete JavaScript Handbook - medium.freecodecamp.org - 20181030](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c)

### tooling lists - states of js

- [The state of js](https://stateofjs.com/)

> So we collected data from over 20,000 developers, asking them questions on topics ranging from front-end frameworks and state management, to build tools and testing libraries.
>
> [The state of js 2017](https://stateofjs.com/2017/introduction/)

- [The Front-End Tooling Survey 2018 - ashleynolan.co.uk/blog](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results)

- [frontendtools.com](http://frontendtools.com/tools)

### JavaScript parsers

#### AST (Abstract Syntax Tree)

AST is for Abstract Syntax Tree. The concept is transverse to all programming languages. [Cf wikipedia def](https://en.wikipedia.org/wiki/Abstract_syntax_tree) for example.

[astexplorer](https://astexplorer.net/)

An online tool to visualize the AST of the pasted code.

Bundlers (webpack, ...) and Linters (ESLint, ...) make heavy use of AST parsers tools to do their job.

Babel is also using this at the point it integrates a parser in his project. This parser was called [Babylon](https://github.com/babel/babylon) before it was [merged in Babel](https://babeljs.io/docs/en/next/babel-parser.html).

ESLint is using [eslint/espree](https://github.com/eslint/espree).

### Transpilers

#### Babel

[Babel](https://babeljs.io/) allows you to write your code in ES6/7/8/x, it will generate ES5 compliant code.

### JavaScript superset

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
