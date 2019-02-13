# tools - javascript linters

## definition

[Lint (software) : en.wikipedia.org](https://en.wikipedia.org/wiki/Lint_(software))

> In computer programming, **lint** is a Unix utility that flags some suspicious and non-portable constructs (likely to be bugs) in C language source code; generically, lint or a **linter** is any tool that flags suspicious usage in software written in any computer language. The term **lint-like behavior** is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code.
> 
> *Lint* as a term can also refer more broadly to syntactic discrepancies in general, especially in interpreted languages like JavaScript and Python. For example, modern lint checkers are often used to find code that doesn't correspond to certain style guidelines. Because these languages lack a compiling phase that shows a list of errors prior to execution, they can also be used as simple debuggers for common errors (showing syntactic discrepancies as errors) or hard to find errors such as heisenbugs (drawing attention on suspicious code as "possible errors").

**TLDR**

A linter performs static analysis of source code to find :

- undected errors on interpreted languages (they have no compiling phase) (ex : accessing an undefined var)
- styleguide issues (tab length, naming, etc ...)

## javascript linters

[Linting JavaScript in 2015 : tech.lauritz.me](http://tech.lauritz.me/linting-javascript-in-2015/)

[A Comparison of JavaScript Linting Tools : www.sitepoint.com 20150305](https://www.sitepoint.com/comparison-javascript-linting-tools/)

- a set of rules which they use to analyze and report problems in JavaScript files
- installed via npm
- available as plugins for tools like Grunt or Gulp (also throught EDI)
- support using comments for configuration

### JSLint

The older one. Created by Douglas Crockford in 2002. Have strongly inspired his books, ["Javascript: The Good Parts (2008)"](https://www.amazon.fr/Javascript-Good-Parts-D-Crockford/dp/0596517742).

Still maintained : [douglascrockford/JSLint](https://github.com/douglascrockford/JSLint).

Not configurable or extensible.

### JSHint

[JSHint](http://jshint.com)

> JSHint is a program that flags suspicious usage in programs written in JavaScript.

JSHint is a 2010 fork of JSLint.

Still maintained : [jshint/jshint](https://github.com/jshint/jshint/).

Configurable but no custom rule support.

#### links

[JSHint Options](http://jshint.com/docs/options/)

[JSHint CLI](http://jshint.com/docs/cli/)

### JSCS

Unmaintained and merged with eslint in 2016. See [this](https://medium.com/@markelog/jscs-end-of-the-line-bc9bf0b3fdb2).

Style checker only.

### ESLint

[ESLint](http://eslint.org/)

Created in 2013.

Still maintained : [eslint/eslint](https://github.com/eslint/eslint)

TLDR : It is JSHint + plugin system.

Usually 2-3x slower then JSHint on a single file [(src)](https://github.com/eslint/eslint#how-does-eslint-performance-compare-to-jshint).

Support JSX (React) and ES6.

Lots of pluggins ( [babel-eslint](https://github.com/babel/babel-eslint), [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular) )

## linters style guide superset

[5 JavaScript Style Guides — Including AirBnB, GitHub, & Google - 20171105](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa)

The idea is to build a preconfired linter with no config available regarding to code style to avoid wasting time on useless debate like spaces or tabs.

[github collections/clean-code-linters](https://github.com/collections/clean-code-linters)

### airbnb

[airbnb/javascript](https://github.com/airbnb/javascript)

Provide npm packages for easy ESLint config :

```bash
npx install-peerdeps --dev eslint-config-airbnb-base
```

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

### stantardjs

[standardjs.com](https://standardjs.com/)

[standardjs.com/changelog](https://standardjs.com/changelog.html)

[standard/standard](https://github.com/standard/standard)

Provide his own package to encapsulate and hide ESLint.

Used by thousands of companies including big ones like NPM, GitHub, mongoDB, ZenDesk, ...

[Package list using standardjs](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)

### Google

[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

[google/eslint-config-google](https://github.com/google/eslint-config-google)

### jQuery

[jQuery foundation JavaScript Style Guide](https://contribute.jquery.org/style-guide/js/)

[jquery/eslint-config-jquery](https://github.com/jquery/eslint-config-jquery)

## prettiers

They limit to the formatting rules and don't deal with code quality.

[Comparison to ESLint/TSLint/stylelint](https://prettier.io/docs/en/comparison.html)

### prettier

[prettier.io](https://github.com/prettier/prettier)
