# TypeScript

Développé par Microsoft

>  C'est un sur-ensemble de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, pouvant ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript.

- [site officiel : typescriptlang.org](http://www.typescriptlang.org/)
- [TypeScript : fr.wikipedia.org](https://fr.wikipedia.org/wiki/TypeScript)

## auteurs / contributeurs

[Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) ([fr](https://fr.wikipedia.org/wiki/Anders_Hejlsberg)) [(github profile)](https://github.com/ahejlsberg)

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

[TypeScript lead dev Ryan Cavanaugh about TypeScript and OOP](https://twitter.com/searyanc/status/826218552910700544) :

> "I'm using TypeScript so I have to write OOP code with classes" :: "I got a paintbrush from Home Depot so I have to paint my house orange"

## documentation

- [Documentation - www.typescriptlang.org](http://www.typescriptlang.org/docs/home.html)
- [TypeScript/wiki - github.com/Microsoft](https://github.com/Microsoft/TypeScript/wiki)
- [TypeScript/wiki/FAQ - github.com/Microsoft](https://github.com/Microsoft/TypeScript/wiki/FAQ)
- [TypeScript specifications](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)
- [angular typescript quickstart](https://angular.io/docs/js/latest/quickstart.html)

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

**optional parameters**

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
> See [DefinitelyTyped @ github.com](https://github.com/DefinitelyTyped/DefinitelyTyped) for `@types` consumption and [TS publishing doc](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) for `"types"` prop.
>
> Ex : Node.js typings [are there](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/index.d.ts).

[Ambient Declarations - basarat.gitbooks.io/typescript](https://basarat.gitbooks.io/typescript/docs/types/ambient/intro.html)

[How do you produce a .d.ts “typings” definition file from an existing JavaScript library? - stackoverflow.com - 20121019](https://stackoverflow.com/questions/12687779/how-do-you-produce-a-d-ts-typings-definition-file-from-an-existing-javascript)

[Getting started with TypeScript type definitions - medium.com/@jonjam - 20171113](https://medium.com/@jonjam/getting-started-with-typescript-type-definitions-1cda7094b8d2)

[How to create your own TypeScript type definition files (.d.ts) and contribute to DefinitelyTyped on GitHub - blog.wolksoftware.com - 20161015](http://blog.wolksoftware.com/contributing-to-definitelytyped)

### tools

[dts-gen - github.com/Microsoft](https://github.com/Microsoft/dts-gen)

## best practices

- [typescript - best practices](http://definitelytyped.org/guides/best-practices.html)

## TSLint

[tslint - palantir.github.io](https://palantir.github.io/tslint/)

[TSLint command-line interface](https://palantir.github.io/tslint/usage/cli/)

[TSLint rules list](https://palantir.github.io/tslint/rules/)

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

Anyway it is a non-blocker to generate the target javascript bundle.

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

## features

### conditional types

Added in TypeScript 2.8 [see release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html).

- [See Conditional Types section in Advanced Types from TS official handbook](http://www.typescriptlang.org/docs/handbook/advanced-types.html)

- [How are you using conditional types? - www.reddit.com/r/typescript - 20181010](https://www.reddit.com/r/typescript/comments/9n189u/how_are_you_using_conditional_types/)

> Super nice [answer here](https://www.reddit.com/r/typescript/comments/9n189u/how_are_you_using_conditional_types/e7iwd64)

- [Conditional types in TypeScript - artsy.github.io/blog - 20181121](http://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/) (Super nice article with practical examples)

> Conditional types probably aren't something you'll write every day, but you might end up using them indirectly all the time. That's because they're great for 'plumbing' or 'framework' code, for dealing with API boundaries and other behind-the-scenes kinda stuff.
