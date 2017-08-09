
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


