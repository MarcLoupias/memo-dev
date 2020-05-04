# TypeScript

Développé par Microsoft

> C'est un sur-ensemble de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript).
> Le code TypeScript est transcompilé en JavaScript, pouvant ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript.

- [site officiel : typescriptlang.org](http://www.typescriptlang.org/)
- [TypeScript : fr.wikipedia.org](https://fr.wikipedia.org/wiki/TypeScript)
- [TypeScript official roadmap](https://github.com/Microsoft/TypeScript/issues/29288)

## auteurs / contributeurs

[Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) ([fr](https://fr.wikipedia.org/wiki/Anders_Hejlsberg)) [(GitHub profile)](https://github.com/ahejlsberg)

> Author of Turbo Pascal, chief architect of Delphi, lead architect of C#, conceptor of .NET framework and core developper and conceptor of TypeScript.

[Daniel Rosenwasser](https://github.com/DanielRosenwasser)

> Program Manager of TypeScript

[Ryan Cavanaugh](https://github.com/RyanCavanaugh)

> TypeScript lead dev

[Mohamed Hegazy](https://github.com/mhegazy)

> TypeScript dev (retired)

## articles

- [blog développeurs sur msdn.org](https://blogs.msdn.microsoft.com/typescript/2015/03/05/angular-2-built-on-typescript/)
- [dev.com angular basé sur typescript](http://typescript.developpez.com/actu/82182/Angular-2-sera-base-sur-TypeScript-convergence-de-AtScript-et-TypeScript-1-5-c-est-une-collaboration-entre-Google-et-Microsoft/)
- [angular-et-typescript-un-mariage-heureux : blog.xebia.fr](http://blog.xebia.fr/2014/03/12/angular-et-typescript-un-mariage-heureux/)
- [definitive guide to typescript](https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/)
- [Top 10 Things to Know about TypeScript - www.developer.com - 20130227](https://www.developer.com/lang/top-10-things-to-know-about-typescript.html)
- [The TypeScript Tax, A Cost vs Benefit Analysis - Eric Elliott - 20190123](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

[TypeScript Evolution - Marius Schulz](https://mariusschulz.com/blog/series/typescript-evolution)

> 34 articles about TS features from TS@2.0 to TS@2.8

[TypeScript lead dev Ryan Cavanaugh about TypeScript and OOP](https://twitter.com/searyanc/status/826218552910700544) :

> "I'm using TypeScript so I have to write OOP code with classes" :: "I got a paintbrush from Home Depot so I have to paint my house orange"

## documentation

- [Documentation - www.typescriptlang.org](http://www.typescriptlang.org/docs/home.html)
- [TypeScript/wiki - `github.com/Microsoft`](https://github.com/Microsoft/TypeScript/wiki)
- [TypeScript/wiki/FAQ - `github.com/Microsoft`](https://github.com/Microsoft/TypeScript/wiki/FAQ)
- [TypeScript specifications](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)
- [angular typescript quickstart](https://angular.io/docs/js/latest/quickstart.html)

### Difference between script as a file and script at runtime

[Taken from this article from Charly Poly](https://medium.com/@wittydeveloper/typescript-make-types-real-the-type-guard-functions-814364e8dbe3)

![TS compile time vs runtime](/images/ts-typescript-overview-compiletime-vs-runtime.png)

## starters projects

[samples - www.typescriptlang.org](https://www.typescriptlang.org/samples/index.html)

[TypeScript Node Starter - `github.com/Microsoft`](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)

> See in particular their [Type Definition (`.d.ts`) Files](https://github.com/Microsoft/TypeScript-Node-Starter#type-definition-dts-files) management which give a lot of infos.

## `tsconfig.json`

[`tsconfig.json` official doc - www.typescriptlang.org](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[`tsconfig.json` schema on json.schemastore.org](http://json.schemastore.org/tsconfig)

[TypeScript Configuration - angular.io/guide](https://angular.io/guide/typescript-configuration)

### compiler options

#### `--noImplicitAny`

[See noImplicitAny in TypeScript Deep Dive from basarat.gitbooks.io](https://basarat.gitbooks.io/typescript/docs/options/noImplicitAny.html)

By default this option is set to `false`.

When a type is not defined by the programmer and when it is impossible to infer it, TypeScript infers an `any` type, example :

```typescript

function log(someArg) {
  sendDataToServer(someArg);
}

// What arg is valid and what isn't?
log(123);
log('hello world');

```

When set to `true`, the compiler raises an error in that case.

It forces the programmer to explicitly set the type and at least the `any` type which in fact remove type checking (it allows anything).

#### `--strictNullChecks`

[See Nullable Types section in Advanced Types from TS official handbook](http://www.typescriptlang.org/docs/handbook/advanced-types.html)

[See Should I use the `strictNullChecks` TypeScript compiler flag - yes or no? - www.tsmean.com/articles](https://www.tsmean.com/articles/learn-typescript/strict-null-checks-best-practice/)

Introduced in TS 2.0.

By default this option is set to `false` for retro compat purposes.

In JavaScript and without this option in TypeScript, `undefined` and `null` are assignable to anything. We can do this :

```javascript

let toto = 'toto';
toto = null;

```

Or in TypeScript :

```typescript

let toto: string = 'toto';
toto = null;

```

With this is option set to `true`, it is not possible anymore.

The intent is to avoid null pointers exceptions.

If the option is set, the programmer needs to explicitly declare when a value can be `undefined` or `null` like this :

```typescript

let toto: string | null = 'toto';
toto = null;

toto = undefined; // Still raise error, should have declare toto as 'let toto: string | null | undefined;'

```

##### optional parameters

If the option is set and an optional parameter is used, the type is implicitly considered to be an union with `undefined` :

```typescript

function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2); // OK
f(1); // OK
f(1, undefined); // OK
f(1, null); // error, 'null' is not assignable to 'number | undefined'

```

## declaration files

[Introduction - www.typescriptlang.org/docs/handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

[Consumption of `*.d.ts` files - www.typescriptlang.org/docs/handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)

> install a `@types/<lib>` package or if the lib itself include a `"types"` prop in its `package.json` it's already there.
>
> See [DefinitelyTyped @ `github.com`](https://github.com/DefinitelyTyped/DefinitelyTyped) for `@types` consumption and [TS publishing doc](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) for `"types"` prop.
>
> Ex : Node.js typings [are there](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/index.d.ts).

[Ambient Declarations - basarat.gitbooks.io/typescript](https://basarat.gitbooks.io/typescript/docs/types/ambient/intro.html)

[How do you produce a .d.ts “typings” definition file from an existing JavaScript library? - stackoverflow.com - 20121019](https://stackoverflow.com/questions/12687779/how-do-you-produce-a-d-ts-typings-definition-file-from-an-existing-javascript)

[Getting started with TypeScript type definitions - medium.com/@jonjam - 20171113](https://medium.com/@jonjam/getting-started-with-typescript-type-definitions-1cda7094b8d2)

[How to create your own TypeScript type definition files (.d.ts) and contribute to DefinitelyTyped on GitHub - blog.wolksoftware.com - 20161015](http://blog.wolksoftware.com/contributing-to-definitelytyped)

### tools

[dts-gen - `github.com/Microsoft`](https://github.com/Microsoft/dts-gen)

## best practices

- [typescript - best practices](http://definitelytyped.org/guides/best-practices.html)

### managing `export` / `import`

[`export default` considered harmful](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html)

[Barrel](https://basarat.gitbooks.io/typescript/docs/tips/barrel.html)

>
> practice of creating an `index.ts` file inside a directory to re-export files (imply to avoid `export default`)
> allows destructured import : `import { Foo, Bar, Baz } from '../demo'; // demo/index.ts is implied`
>

## Linters

### TSLint

[tslint - `palantir.github.io`](https://palantir.github.io/tslint/)

[TSLint command-line interface](https://palantir.github.io/tslint/usage/cli/)

[TSLint rules list](https://palantir.github.io/tslint/rules/)

#### TSLint deprecated soon

[TSLint in 2019 - medium.com/palantir - 20190219](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)

TSLint will be deprecated asap in favor of **typescript-eslint**.

### typescript-eslint

[https://github.com/typescript-eslint](https://github.com/typescript-eslint)

[typescript-eslint/typescript-eslint - `github.com`](https://github.com/typescript-eslint/typescript-eslint)

> Monorepo for all the tooling which enables ESLint to support TypeScript [https://typescript-eslint.io/](https://typescript-eslint.io/)

## videos

- [TypeScript, le JavaScript statiquement typé : Devoxx2015](https://www.youtube.com/watch?v=YjI7mi7AGzA&list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b&index=109)
>
> Migration progressive (passer les `.js` en `.ts` suffit à migrer sur `typescript` et inversement pour rollback)
>
> Facilité apprentissage (juste le fait de typer)
>
> Compatible `ES6` (ajoute des polyfills, 90% de babel, donc autant faire `ES5` -> `typescript` plutôt que `ES5` -> `ES6` -> `TS`
>
> Refactoring simplifié du fait des types (erreurs à la compilation)
>
> Assitance IDE meilleure (Webstorm nickel)
>

## erreurs tscompiler

[errors codes classification](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#diagnostic-message-codes) :

> Diagnostics are categorized into general ranges. If adding a new diagnostic message, use the first integral number greater than the last used number in the appropriate range.
>
> 1000 range for syntactic messages
> 2000 for semantic messages
> 4000 for declaration emit messages
> 5000 for compiler options messages
> 6000 for command line compiler messages
> 7000 for noImplicitAny messages

## Erreurs courantes après migration ES5/ES6 vers TS

- `TS2339: Property 'xxx' does not exist on type 'Yyyy'.`

Cf issue 6373 : [Getting error TS2339: Property does not exist on type for a valid ES6 class](https://github.com/Microsoft/TypeScript/issues/6373)

Cf issue 2606 : [ES6 should be valid TypeScript](https://github.com/Microsoft/TypeScript/issues/2606)

```javascript
class Car {
    constructor(weight) {
        this.weight = weight;
    }
}
```

is invalid ts code, it will output `Error:(3, 14) TS2339: Property 'weight' does not exist on type 'Car'.`

```javascript
class Car {
    weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }
}
```

is required by TS.

Anyway it is a non-blocker to generate the target JavaScript bundle.

If the input code is syntactically correct (prior to type checking) then it can generate ES output, and it is "valid" TS. At this first level, TS is a superset of ES, in that the set of valid TS programs is larger than the set of valid ES programs (because it includes all the valid ES programs plus those with type annotations).

The second level is type-correctness, which is what your error is complaining about. At this level, TS can act as a subset of ES: some valid ES programs, such as your example, are not type-correct TS programs.

- `error TS2380: 'get' and 'set' accessor must have the same type.`

See [TypeScript/issues/4087](https://github.com/Microsoft/TypeScript/issues/4087) and [TypeScript/issues/2521](https://github.com/Microsoft/TypeScript/issues/2521)

A classical pattern in JS with class to define a model is :

```javascript
class MyClass {
    constructor(value) {
        this._myDate = value;
    }

    get myDate() {
        return this._myDate;
    }

    set myDate(value) {
        this._myDate = moment(value);
    }
}
```

The accessors are used to refine / format the data set to the instance.

But in TypeScript accessors must have the same type, and when converted to TS the compiler raise an error :

```javascript
class MyClass {

    private _myDate: moment.Moment;

    get myDate(): moment.Moment {
        return this._myDate;
    }

    set myDate(value: Date | moment.Moment) {
        this._myDate = moment(value);
    }
}

```

The workaround is to create a dedicated function but we loose the `instance.myDate = new Date();` usage.

```javascript
class MyClass {

    private _myDate: moment.Moment;

    get myDate(): moment.Moment {
        return this._myDate;
    }

    set myDate(value: moment.Moment) {
        assert.fail('Setter for myDate is not available. Please use: setMyDate() instead');
    }

    setMyDate(value: Date | moment.Moment) {
        this._myDate = moment(value);
    }
}
```

Another workaround would be to type `_myDate` with `Date | moment.Moment` but we loose a lot of type checking here.

See cons `TS2380` rule arguments :

[juanpablodelatorre](https://github.com/Microsoft/TypeScript/issues/2521#issuecomment-322525116)

> When TypeScript limits JavaScript, it becomes more of a nuisance than an advantage. Isn't TypeScript meant to help developers communicate with each other?
>
> Also, setters are called Mutators for a reason. If I wouldn't need any kind of conversion, I wouldn't use a setter, I would set the variable by myself.

[gmurray81](https://github.com/Microsoft/TypeScript/issues/2521#issuecomment-384420945)

impact with Angular and components inputs from templates.

See pros `TS2380` rule arguments :

[kitsonk (TypeScript contributor)](https://github.com/Microsoft/TypeScript/issues/2521#issuecomment-319915282)

> IMO, ever since JavaScript allowed accessors, people have potentially created confusing APIs with them. I personally find it confusing that something on assignment magically changes to something else. Implicit anything, especially type conversion, is the bane of JavaScript IMO. It is exactly the flexibility that causes problems.

[mhegazy (TypeScript contributor)](https://github.com/Microsoft/TypeScript/issues/2521#issuecomment-248049350)

> After thinking about this some more. i think the issue here is really the complexity of the implementation.

He flagged issue as "Too Complex" and "Design Limitation" labels after that post then closed the issue 2521.

[kitsonk (TypeScript contributor)](https://github.com/Microsoft/TypeScript/issues/2521#issuecomment-319407536)

> The labels on the issue indicate it is a design limitation and the implementation would be considered too complex, which essentially means that if someone has a super compelling reason why this should be the case, it is not going anywhere.

## features

### Control Flow Based Type Analysis

[See what's new in TS@2.0 - www.typescriptlang.org](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#control-flow-based-type-analysis)

[TypeScript 2.0: Control Flow Based Type Analysis - mariusschulz.com/blog - 20160930](https://mariusschulz.com/blog/typescript-2-0-control-flow-based-type-analysis)

> With TypeScript 2.0, the type checker analyses all possible flows of control in statements and expressions to produce the most specific type possible (the narrowed type) at any given location for a local variable or parameter that is declared to have a union type.

### conditional types

Added in TypeScript 2.8 [see release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html).

- [See Conditional Types section in Advanced Types from TS official handbook](http://www.typescriptlang.org/docs/handbook/advanced-types.html)

- [How are you using conditional types? - www.reddit.com/r/typescript - 20181010](https://www.reddit.com/r/typescript/comments/9n189u/how_are_you_using_conditional_types/)

> Super nice [answer here](https://www.reddit.com/r/typescript/comments/9n189u/how_are_you_using_conditional_types/e7iwd64)

- [Conditional types in TypeScript - `artsy.github.io/blog` - 20181121](http://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/) (Super nice article with practical examples)

> Conditional types probably aren't something you'll write every day, but you might end up using them indirectly all the time. That's because they're great for 'plumbing' or 'framework' code, for dealing with API boundaries and other behind-the-scenes kinda stuff.

### type assertion

[See Type assertions @ Basic Types - www.typescriptlang.org](https://www.typescriptlang.org/docs/handbook/basic-types.html)

> Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
>
> Type assertions are a way to tell the compiler "trust me, I know what I’m doing."
>
> A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler.

The "angle-bracket" syntax :

```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

The `as` syntax :

```typescript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

The first is the legacy one and the second has been added to be compatible with JSX (TSX with TypeScript).

The first one clashed with JSX syntax.

The second is now considered to be the syntax to use.

[type-assertion - basarat.gitbooks.io/typescript](https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html)

[What are the difference between these type assertion or casting methods in TypeScript - stackoverflow.com - 20180413](https://stackoverflow.com/questions/49818305/what-are-the-difference-between-these-type-assertion-or-casting-methods-in-types)

### type aliases

[See Type aliases @ Types Aliases - www.typescriptlang.org](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

[TSLint `callable-types`](https://palantir.github.io/tslint/rules/callable-types/)

> An interface or literal type with just a call signature can be written as a function type.

[Interface vs Type alias in TypeScript - Martin Hochel - 20180312](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

> what’s the difference between using `type` and `interface` for defining compile time types within TypeScript
>
> official documentation is obsolete since TS@2.1 :
>
> - errors messages display type alias name correctly
> - types aliases can be extended (extended by an `interface` or implemented by a `class`)
> - types aliases can be used for type alias extension via intersection operator `&`

### type guards

[See Type Guards and Differentiating Types - www.typescriptlang.org](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)

> A type guard is some expression that performs a runtime check that guarantees the type in some scope.

[Checking the type of an object in Typescript: the type guards - medium.com/ovrsea - 20181122](https://medium.com/ovrsea/checking-the-type-of-an-object-in-typescript-the-type-guards-24d98d9119b0)

[What does the `is` keyword do in typescript? - stackoverflow.com - 20161017](https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript)

```typescript
function isString(test: any): test is string{
    return typeof test === 'string';
}

function example(foo: any){
    if(isString(foo)){
        console.log('it is a string' + foo);
        console.log(foo.length); // string function
    }
}
example('hello world');
```

Inside a type guard function, we can check :

- that a property exist with the `in` keyword (`'propname' in foo` where `foo` is the object passed to the type guard function to check onto)
- that a property is from the `typeof` `number`, `string`, `boolean`, or `symbol` and nothing more.

It is impossible to check if a property is from the `typeof` a custom type because there is not the required meta data available at runtime.

### `unknown` type

The purpose of the `unknown` type is to force the developper to check the structure with type guards or assert the type with type assertion.

[See what's new in TS@3.0 - www.typescriptlang.org](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)

> `unknown` is the type-safe counterpart of `any`.
> Anything is assignable to `unknown`, but `unknown` isn’t assignable to anything but itself and `any` without a type assertion or a control flow based narrowing.
> Likewise, no operations are permitted on an `unknown` without first asserting or narrowing to a more specific type.

[TypeScript 3.0: Exploring Tuples and the Unknown Type - auth0.com/blog - 20180821](https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/)

> We can use an `unknown` type if and only if we perform some form of checking on its structure.
> We can either check the structure of the element we want to use
> or we can use type assertion to tell TypeScript that we are confident about the type of the value

## Dependency Injection with TypeScript

### Using the classical functional style

Using type aliases to define function types.

In vanilla JavaScript it is dead simple, we use curried function and partial application :

```javascript

// dependency function without deps

const doSomethingElse = (arg) => {
    // impl ...
}

export default doSomethingElse;

// function with dependency

const makeDoSomething = ({ doSomethingElse }) => (arg) => {
    // impl ...

    const value = doSomethingElse(111);

    // impl ...
}

export default makeDoSomething;

// caller

import doSomethingElse from './do-something-else'
import makeDoSomething from './make-do-something'

const doSomething = makeDoSomething({ doSomethingElse });

doSomething('toto');

```

In TypeScript we can use the same pattern, and we can type dependencies using Type Aliases.

We could prefer type aliases instead of interfaces because of [TSLint `callable-types`](https://palantir.github.io/tslint/rules/callable-types/) rule.

The same example as above in TypeScript becomes :

```typescript

// dependency function without deps

export type DoSomethingElseFnType = (arg: number) => number;

export function doSomethingElse(arg: number): number {
    // impl ...
}

// function with dependency

import { DoSomethingElseFnType } from './do-something-else';

export type = DoSomethingFnType = (arg: string) => string;

export function makeDoSomething(deps: { doSomethingElse: DoSomethingElseFnType}): DoSomethingFnType {
    return (arg: string): string => {
        // impl ...

        // you reach your dependency through deps destructuring and benefit from typing :
        const value = deps.doSomethingElse(111);

        // impl ...
    }
}

// caller

import { doSomethingElse } from './do-something-else';
import { DoSomethingFnType, makeDoSomething } from './make-do-something';

const doSomething: DoSomethingFnType = makeDoSomething({ doSomethingElse });

doSomething('toto');

```

### Using POO style by hand

You don't need any typing here, because obviously a `class` is a type.

```typescript

// dependency class without deps

export class SomethingElse {
    public static makeSomethingElse(): SomethingElse {
        return new SomethingElse();
    }

    private constructor() {

    }

    public doSomethingElse(arg: number): number {
        // impl ...
    }
}

// class with dependency

import { SomethingElse } from './something-else';

export class Something {
    public static makeSomething(deps: {somethingElse: SomethingElse}): Something {
        return new Something(deps);
    }

    private somethingElse: SomethingElse;

    private constructor(deps: {somethingElse: SomethingElse}) {
        this.somethingElse = deps.somethingElse;
    }

    public doSomething(arg: string): string {
        const value = this.somethingElse.doSomethingElse(111);

        // impl ...
    }
}

// caller

import { SomethingElse } from './something-else';
import { Something } from './do-something';

const somethingElse: SomethingElse = SomethingElse.makeSomethingElse();
const something: Something = Something.makeSomething({ somethingElse });

something.doSomething('toto');
```

### Using POO style with decorators

See [decorators from www.typescriptlang.org/docs/handbook](http://www.typescriptlang.org/docs/handbook/decorators.html).

[Dependency Injection in TypeScript - 20180205](https://nehalist.io/dependency-injection-in-typescript/)

[InversifyJS - `github.com/inversify`](https://github.com/inversify/InversifyJS)

> A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.

## Tricks

### Nominal typing

[Nominal typing techniques in TypeScript - `michalzalecki.com` - 20171227 - Michal Zalecki](https://michalzalecki.com/nominal-typing-in-typescript/)

- Approach #1: Class with a private property

```typescript
class USD {
  private __nominal: void;
  constructor(public value: number) {};
}

class EUR {
  private __nominal: void;
  constructor(public value: number) {};
}

const usd = new USD(10);
const eur = new EUR(10);

function gross(net: USD, tax: USD) {
  return { value: net.value + tax.value } as USD;
}

gross(usd, usd); // ok
gross(eur, usd); // Error: Types have separate declarations of a private property '__nominal'.
```

- Approach #2: Brands

```typescript
interface USD {
  _usdBrand: void;
  value: number;
}

interface EUR {
  _eurBrand: void;
  value: number;
}

let usd: USD = { value: 10 } as USD;
let eur: EUR = { value: 10 } as EUR;

function gross(net: USD, tax: USD) {
  return { value: net.value + tax.value } as USD;
}

gross(usd, usd); // ok
gross(eur, usd); // Error: Property '_usdBrand' is missing in type 'EUR'.
```

- Approach #3: Intersection types

```typescript
class Currency<T extends string> {
  private as: T;
}

type USD = number & Currency<"USD">
type EUR = number & Currency<"EUR">

const usd = 10 as USD;
const eur = 10 as EUR;

function gross(net: USD, tax: USD) {
  return (net + tax) as USD;
}

gross(usd, usd); // ok
gross(eur, usd); // Error: Type '"EUR"' is not assignable to type '"USD"'.

// ...

function ofUSD(value: number) {
  return value as USD;
}

function ofEUR(value: number) {
  return value as EUR;
}

const usd = ofUSD(10);
const eur = ofEUR(10);

function gross(net: USD, tax: USD) {
  return ofUSD(net + tax);
}
```

- Approach #4: Intersection types and brands

```typescript
type Brand<K, T> = K & { __brand: T }

type USD = Brand<number, "USD">
type EUR = Brand<number, "EUR">

const usd = 10 as USD;
const eur = 10 as EUR;

function gross(net: USD, tax: USD): USD {
  return (net + tax) as USD;
}

gross(usd, usd); // ok
gross(eur, usd); // Type '"EUR"' is not assignable to type '"USD"'.
```

[This PR in typescript repo](https://github.com/microsoft/TypeScript/pull/33038) will maybe land.
